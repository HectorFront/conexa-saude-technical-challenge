/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';

type InputRadioProps = {
    secondary?: boolean,
    className?: string
}

export const InputRadio: ElementType = memo(({ secondary, className = '', ...props }: InputRadioProps): JSX.Element =>
    <S.Radio
        {...props}
        type="radio"
        secondary={secondary}
        className={`form-check-input ${className}`}
    />
);