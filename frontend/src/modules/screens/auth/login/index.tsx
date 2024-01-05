/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, useReducer, useCallback, useState, useContext} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Styled */
import * as S from '../styles';
/** @name Internal */
import {ModelLogin} from "./model";
import {ContinueWith} from "../components";
/** @name External */
import {FormatString} from "utils";
import {UserContext} from "context/user";
import {reducer, handleKeyState} from "utils/reducer/useReducer";
import {Alert, Col, LoadingDefault, Button, Box, InputLabel, InputPasswordLabel} from "helpers";
import {FormTitle} from "../styles";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
const INITIAL_STATE = {
    password: null,
    email: null
}
const OPTIONS_ALERT = { title: '#', message: '#' };

const ClientLogin = memo((_props: ChildComponentProps) => {

    let timeoutAlert = null;
    const contextUser = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);
    const [alert, setOptionsAlert] = useState(OPTIONS_ALERT);
    const [isLoadingSubmit, setLoadingSubmit] = useState(false);

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    /**
     *
     * @param id
     * @param value
     */
    const onChangeInput = useCallback(({ target: { id: key, value }}: { target: HTMLInputElement }) => {
        return handleKeyState(dispatch, key, value);
    },[]);

    /**
     *
     * @param next
     */
    const validSubmit = useCallback((next) => {
        const email = FormatString.validEmail(state.email);
        const password = state.password?.length;

        if(!email)
            return handleKeyState(dispatch, 'email', '');
        if(!password)
            return handleKeyState(dispatch, 'password', '');

        return next();
    },[state]);

    /**
     * @param data
     */
    const setDataUser = useCallback((data) => {
        const newData = ModelLogin.prepareDataUserContext(data);
        contextUser.handleToken(newData.token);
        contextUser.handleState(newData.user);
    },[]);

    /**
     *
     * @param title
     * @param message
     * @constructor
     */
    const handleAlert = useCallback(({ title, message }) => {
        if(timeoutAlert) clearTimeout(timeoutAlert);
        setShowAlert(true);
        setOptionsAlert({ title, message });
        timeoutAlert = setTimeout(() => setShowAlert(false), 3000);
    },[]);

    /**
     *
     */
    const submitLogin = useCallback(() => {
        validSubmit(() => {
            setLoadingSubmit(true);
            ModelLogin.userLogin(state)
                .then(data => setDataUser(data))
                .catch(err => {
                    if(err === 400)
                        return handleAlert({ title: 'Tente novamente!', message: 'Usuário ou senha inválidos.' });
                    if(err === 401)
                        return handleAlert({ title: 'Tente novamente!', message: 'Usuário ou senha inválidos.' });
                }).finally(() => setLoadingSubmit(false));
        });
    },[state]);

    return (
        <S.Container className="container-md">
            <Col cols="12 12 12 5 5">
                <Alert title={alert.title} show={showAlert} type="danger">
                    {alert.message}
                </Alert>
                <Box className="shadow-lg">
                    <S.Form>
                        <fieldset>
                            <S.FormTitle>Faça Login</S.FormTitle>
                            {/*Login with Facebook or Google (Additional)*/}
                            {/*<div className="mb-5">*/}
                            {/*    <ContinueWith type="google" className="mt-3 mb-3"/>*/}
                            {/*    <ContinueWith type="facebook"/>*/}
                            {/*</div>*/}
                            <div>
                                <InputLabel
                                    size="lg"
                                    id="email"
                                    type="email"
                                    label="E-mail"
                                    value={state.email ?? ''}
                                    error={state.email === ''}
                                    placeholder="exemplo@gmail.com"
                                    onChange={onChangeInput}
                                />
                            </div>
                            <div className="mt-3 mb-4">
                                <InputPasswordLabel
                                    size="lg"
                                    id="password"
                                    type="password"
                                    label="Senha"
                                    value={state.password ?? ''}
                                    error={state.password === ''}
                                    placeholder="Insira sua senha"
                                    onChange={onChangeInput}
                                />
                            </div>
                            <S.FormFooter className="mt-3">
                                <Button
                                    size="lg"
                                    icon="login"
                                    className="mb-3"
                                    onClick={submitLogin}
                                >

                                    {isLoadingSubmit ?
                                        <>
                                            <LoadingDefault/>&nbsp;Entrando
                                        </>
                                        : 'Entrar'
                                    }
                                </Button>
                                Esqueceu sua senha?&nbsp;
                                <S.Link onClick={() => {}}>Redefinir senha</S.Link>
                            </S.FormFooter>
                        </fieldset>
                    </S.Form>
                </Box>
            </Col>
        </S.Container>
    )
});

export default withRouter(ClientLogin);