/**
 * @author Hector Rodrigues da Silva
 */

/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

interface AuthProps {
    children: ReactNode
}

export const Auth: ElementType = memo(({ children }: AuthProps): JSX.Element => {
    return (
        <S.ContainerAuth>
            <S.Border/>
            <S.Logo
                alt="Logo"
                src={LogoDefault}
            />
            {children}
        </S.ContainerAuth>
    )
});