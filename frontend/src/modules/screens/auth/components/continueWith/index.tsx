/**
 * @author Hector Rodrigues da Silva
 */

/** @name Images */
import IconGoogle from 'assets/icons/google_default.png';
import IconFacebook from 'assets/icons/facebook_white.png';
/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';
/** @name External */
import {FormatString} from 'utils';

export const ContinueWith: ElementType = memo(({type = 'facebook', className = '', ...props}): JSX.Element => {

    const icons: object = {
        google: IconGoogle,
        facebook: IconFacebook
    };

    const isFacebook = type.includes('facebook');
    return (
        <S.Button isFacebook={isFacebook} className={`shadow ${className}`} {...props}>
            <img
                width={35}
                height="auto"
                src={icons[type]}
                alt={`Continuar com ${FormatString.capitalize(type)}`}
            />
            <S.Text isFacebook={isFacebook}>Continuar com {FormatString.capitalize(type)}</S.Text>
        </S.Button>
    );
});