/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, useCallback, useEffect, useReducer, useState} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Styled */
import * as S from './styles';
/** @name Internal */
import {ModelHome} from "./model";
import {ListPatients, ListSchedules} from "./components";
import {reducer, resetState} from "utils/reducer/useReducer";
/** @name External */
import {Button, Modal, ModalHeader, ModalBody} from "helpers";

interface ChildComponentProps extends RouteComponentProps<any> {}

type StateProps = {
    patients: [] | [{
        consults: [{
            id: number,
            date: string
        }],
        id: 0,
        email: string,
        first_name: string,
        last_name: string,
    }]
}

type CurrentPatientProps = {} | {
    consults: [{
        id: number,
        date: string
    }],
    id: 0,
    email: string,
    first_name: string,
    last_name: string
}

/** @name Constants */
export const INITIAL_STATE: StateProps = { patients: [] };
export const INITIAL_CURRENT_PATIENT: CurrentPatientProps = {
    consults: [{
        id: 0,
        date: null
    }],
    id: 0,
    email: null,
    first_name: null,
    last_name: null
};

const Home = memo((_props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const [currentPatientMeet, setCurrentPatientMeet] = useState(INITIAL_CURRENT_PATIENT);

    const [countSchedules, setCountSchedules] = useState(0);

    const [showModalMeet, setShowModalMeet] = useState(false);
    const [showModalConsult, setShowModalConsult] = useState(false);

    /**
     *
     */
    const dataSchedules = useCallback(() => {
        ModelHome.dataSchedules()
            .then(schedules => resetState(dispatch, schedules))
            .catch(err => console.log(err));
    },[]);

    /**
     *
     */
    const meetPatient = useCallback((patient: CurrentPatientProps) => {
        console.log(patient)
        setCurrentPatientMeet(patient);
        return setShowModalMeet(true);
    },[]);

    /**
     *
     */
    const newConsult = useCallback(() => {
        return setShowModalConsult(true);
    },[]);

    useEffect(() => {
        if(state?.patients.length) {
            let sumSchedules = 0;
            state.patients.forEach(patient => sumSchedules += patient.consults.length);
            setCountSchedules(sumSchedules);
        }
    },[state]);

    useEffect(() => dataSchedules(),[]);

    return (
        <>
            {/*********/}
            {/*MEET PATIENTS*/}
            <Modal show={showModalMeet} handleClose={() => setShowModalMeet(false)}>
                <ModalHeader title="Atendimento"/>
                <ModalBody>
                    <ListSchedules
                        type="concluir"
                        list={[currentPatientMeet]}
                        action={{
                            text: 'Concluir',
                            event: () => {},
                            icon: 'free_cancellation',
                        }}
                    />
                </ModalBody>
            </Modal>
            {/*********/}
            {/*NEW CONSULT*/}
            <Modal show={showModalConsult} handleClose={() => setShowModalConsult(false)}>
                <ModalHeader title="Nova consulta"/>
                <ModalBody>
                    <ListSchedules
                        type="agendar"
                        list={state.patients}
                        description="Consultas"
                        counter={countSchedules}
                        action={{
                            text: 'Excluir',
                            event: () => {},
                            icon: 'delete',
                        }}
                    />
                </ModalBody>
            </Modal>
            {/*********/}
            <S.Container>
                <S.Title>Consultas</S.Title>
                <ListPatients
                    list={state.patients}
                    type="patient"
                    description="Pacientes"
                    counter={state.patients.length}
                    action={{
                        text: 'Atender',
                        icon: 'event_available',
                        event: patient => meetPatient(patient)
                    }}
                />
            </S.Container>
            <Button
                size="lg"
                icon="today"
                onClick={newConsult}
                style={{ position: 'absolute', right: 20, bottom: 20 }}
            >
                Agendar consulta
            </Button>
        </>
    )
});

export default withRouter(Home);