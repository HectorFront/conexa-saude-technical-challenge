/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';
/** @name Internal */
import * as S from './styles';

type BoxProps = {
    className?: string,
    children: ReactNode
}

export const Box: ElementType = memo(({ children, ...props }: BoxProps): JSX.Element =>
   <S.ElBox {...props}>
       {children}
   </S.ElBox>
);