/**
 * @author Hector Rodrigues da Silva
 */

/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Styles */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, useContext} from 'react';
/** @name External */
import {Button} from "helpers";
import {UserContext} from "context/user";
import {Authentication} from "services/user/authentication";

import * as ContextInterfaces from 'context/context.interfaces';

export const NavBar: ElementType = memo((_props): JSX.Element => {
    const userContext = useContext<ContextInterfaces.UserContextProps>(UserContext);
    return (
        <S.Header>
            <S.Logo
                alt="Logo"
                className="mx-2"
                src={LogoDefault}
            />
            <S.ContainerNav>
                <S.Username>Olá, Dr. {userContext.state.name}</S.Username>
                <Button
                    outline
                    size="md"
                    icon="logout"
                    className="m-2 mx-2"
                    onClick={() => Authentication.logout(userContext)}
                >
                    Sair
                </Button>
            </S.ContainerNav>
        </S.Header>
    );
});