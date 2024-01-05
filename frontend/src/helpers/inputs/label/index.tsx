/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';
/** @name External */
import {Render, MaterialIcon, InputDefault} from 'helpers/index';
import Colors from 'layout/vars/colors';

type InputLabelProps = {
    label: string,
    iconLabel?: string,
    iconLabelImg?: string,
}

export const InputLabel: ElementType = memo(({ label, iconLabel, iconLabelImg, ...props }: InputLabelProps): JSX.Element =>
    <>
        <S.Label className="form-label">
            <Render condition={iconLabel}>
                <MaterialIcon
                    size="15px"
                    color={Colors.SECONDARY}
                    icon={iconLabel ?? ''}
                />&nbsp;
            </Render>
            <Render condition={iconLabelImg}>
                <img
                    width="auto"
                    height="15px"
                    alt="Icon label"
                    src={iconLabelImg}
                />&nbsp;
            </Render>
            <b>{label}</b>
        </S.Label>
        <InputDefault
            {...props}
        />
    </>
);

