/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as StyledInternal from "./styles";
import * as StyledExternal from "../listPatients/styles";
/** @name Dependencies */
import 'moment-timezone';
import Moment from 'react-moment';
import {Accordion} from 'react-bootstrap';
import {ElementType, Fragment, memo} from "react";
/** @name External */
import {ItemPatient} from '../itemPatient';
import {Button, MaterialIcon, Render} from "helpers";

type ActionProps = {
    icon: string,
    text: string,
    event: Function
}

type ListProps =  [] | [{
    consults: [{
        id: number,
        date: string
    }],
    id: 0,
    email: string,
    first_name: string,
    last_name: string,
}];

interface ListSchedulesProps {
    list: [] | ListProps,
    counter: number,
    type: string,
    description: string,
    action: ActionProps
}

export const ListSchedules: ElementType = memo(({ list, counter, type, description, action }: ListSchedulesProps) =>
    <>
        <StyledExternal.CountList>
            <StyledExternal.NumberCount>{counter}</StyledExternal.NumberCount> {description}
        </StyledExternal.CountList>
        <Accordion defaultActiveKey="0" flush>
            {list.map((patient, index) =>
                <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>
                        <StyledInternal.ContainerNewConsult>
                            <div>
                                <MaterialIcon icon="person"/>&nbsp;{patient.first_name}
                            </div>
                        </StyledInternal.ContainerNewConsult>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Render condition={type === 'agendar'}>
                            <Button
                                outline
                                size="lg"
                                className="mb-4"
                                icon="add_circle"
                                onClick={() => {}}
                            >
                                Nova
                            </Button>
                        </Render>
                        {patient.consults.map((consult, index) =>
                            <Fragment key={index}>
                                <ItemPatient
                                    index={index}
                                    action={action}
                                    text={index+1}
                                    patient={patient}
                                    subtext={
                                        <>
                                            <Moment format="DD/MM/YYYY">{consult.date}</Moment>&nbsp;às&nbsp;
                                            <Moment format="HH:mm">{consult.date}</Moment>
                                        </>
                                    }
                                />
                                <br/>
                            </Fragment>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    </>
);