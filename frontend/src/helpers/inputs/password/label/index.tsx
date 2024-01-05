/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import {memo, ElementType, MouseEventHandler, useState, useCallback} from 'react';
/** @name External */
import {Render, InputDefault, MaterialIcon} from 'helpers';
/** @name Constants */
import {ATTR_TYPES_PASSWORD} from '../constants';

type InputPasswordLabelProps = {
    label: string,
    error?: boolean
}

export const InputPasswordLabel: ElementType = memo(({ label, error, ...props }: InputPasswordLabelProps): JSX.Element => {
    const [icon, setIcon] = useState<string>(ATTR_TYPES_PASSWORD.text.icon);
    const [typeCurrent, setTypeAttr] = useState<string>(ATTR_TYPES_PASSWORD.text.type);

    /**
     *
     */
    const handleTypePassword: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setIcon(ATTR_TYPES_PASSWORD[typeCurrent].icon);
        setTypeAttr(ATTR_TYPES_PASSWORD[typeCurrent].type);
    },[typeCurrent]);

    return (
        <>
            <label className="form-label">
                <b>{label}</b>
            </label>
            <div className={!error ? 'input-group' : undefined}>
                <InputDefault
                    {...props}
                    error={error}
                    type={typeCurrent}
                />
                <Render condition={!error}>
                    <S.VisibilityPassword
                        type="button"
                        className="btn"
                        onClick={handleTypePassword}
                    >
                        <MaterialIcon hover icon={icon} />
                    </S.VisibilityPassword>
                </Render>
            </div>
        </>
    )
});
