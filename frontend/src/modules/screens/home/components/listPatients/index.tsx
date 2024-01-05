/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import {ElementType, memo} from "react";
import {FixedSizeList as ReactWindowList} from 'react-window';
/** @name Internal */
import {ItemPatient} from "../itemPatient";
/** @name External */
import {Render} from 'helpers';

type ActionProps = {
    icon: string,
    text: string,
    event: Function
}

interface ListSchedulesProps {
    list: [],
    counter: number | string,
    description: string,
    action: ActionProps
}

export const ListPatients: ElementType = memo(({ list, counter = '', description, action }: ListSchedulesProps) =>
    <S.ContainerSchedules>
        <div className="container-lg">
            <Render condition={description}>
                <S.CountList>
                    <S.NumberCount>{counter}</S.NumberCount> {description}
                </S.CountList>
            </Render>
            <S.ContainerList>
                <ReactWindowList
                    width="100%"
                    height={600}
                    itemSize={80}
                    overscanCount={3}
                    itemData={list}
                    itemCount={list.length}
                >
                    {({ style, data, index }) => {
                        const patientSchedule = data[index];
                        return (
                            <ItemPatient
                                key={index}
                                style={style}
                                index={index}
                                action={action}
                                patient={patientSchedule}
                                subtext={patientSchedule.email}
                                text={patientSchedule.first_name}
                            />
                        );
                    }}
                </ReactWindowList>
            </S.ContainerList>
        </div>
    </S.ContainerSchedules>
)