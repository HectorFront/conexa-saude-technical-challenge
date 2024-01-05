/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import {memo, ElementType} from 'react';

type InputDefaultProps = {
    size?: string | undefined,
    error?: boolean | undefined,
    className?: string | undefined
}

/** @name Constants */
const CSS_NAMESPACE = 'form-control';

export const InputDefault: ElementType = memo(({size = 'md', error = false, className = '', ...props}: InputDefaultProps): JSX.Element => {

    const errorClassname: string = error ? ' is-invalid' : '';
    const customClassName: string = className ? ` ${className}` : '';

    const defineCSSNameSpace: string = `${CSS_NAMESPACE} ${CSS_NAMESPACE}-${size}` + customClassName + errorClassname;
    return (
        <>
            <S.Default
                {...props}
                className={defineCSSNameSpace}
            />
            <S.Invalid>Preencha o campo corretamente.</S.Invalid>
        </>
    );
});