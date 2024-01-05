/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

type CardProps = {
    style?: Object,
    className?: string,
    children: ReactNode
}

export const Card: ElementType = memo(({ className = '', children, ...props }: CardProps): JSX.Element =>
    <S.Card {...props} className={`card ${className}`}>
        {children}
    </S.Card>
);