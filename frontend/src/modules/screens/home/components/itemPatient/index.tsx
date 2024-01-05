/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import {ElementType, memo} from "react";
/** @name External */
import {Button} from "helpers";

type ActionProps = {
    icon: string,
    text: string,
    event: Function
}

interface ItemScheduleProps {
    index: number,
    text: string,
    subtext: string,
    style: Object,
    patient?: Object,
    action: ActionProps
}

const stylesActions = {
    Excluir: () => ({
        outline: true,
        secondary: true
    })
}

export const ItemPatient: ElementType = memo(({ text, subtext, patient, action, style = {} }: ItemScheduleProps) => {
    const handlePropsActions = stylesActions[action.text];
    const setProps = handlePropsActions ? handlePropsActions() : {};
    return (
        <S.ItemList style={style}>
            <S.GroupDataPatient>
                <S.Text>{text}</S.Text>
                <S.SubText>{subtext}</S.SubText>
            </S.GroupDataPatient>
            <Button
                {...setProps}
                size="lg"
                icon={action.icon}
                onClick={() => action.event(patient)}
                style={{ position: 'absolute', right: 10 }}
            >
                {action.text}
            </Button>
        </S.ItemList>
    )
}, (_prevProps, _nextProps) => true)