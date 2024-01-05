/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import {memo, ElementType, MouseEventHandler, useState, useCallback} from 'react';
/** @name External */
import {InputDefault, MaterialIcon} from 'helpers/index';
/** @name Constants */
import {ATTR_TYPES_PASSWORD} from "../constants";

export const InputPassword: ElementType = memo((error, ...props): JSX.Element => {
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
        <div className="input-group">
            <InputDefault
                {...props}
                error={error}
                type={typeCurrent}
            />
            <S.VisibilityPassword
                type="button"
                className="btn"
                onClick={handleTypePassword}
            >
                <MaterialIcon hover icon={icon} />
            </S.VisibilityPassword>
        </div>
    );
});
