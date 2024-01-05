/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, ElementType, ReactNode, MouseEventHandler} from 'react';
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {MaterialIcon, Render} from "helpers";

type ButtonProps = {
    icon?: string,
    size?: string,
    outline?: boolean,
    className?: string,
    children: ReactNode,
    secondary?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: ElementType = memo(({ icon = '', size, outline, secondary, className = '', ...props}: ButtonProps): JSX.Element =>
    <S.ButtonCustom
        {...props}
        type="button"
        outline={outline}
        secondary={secondary}
        className={`btn btn-dark btn-${size ?? 'sm'} ${className}`}
        onClick={(e: any) => { props.onClick && props.onClick(e); e.target.blur(); }}
    >
        <Render condition={icon}>
            <MaterialIcon
                pointer
                icon={icon}
            />&nbsp;
        </Render>
        {props.children}
    </S.ButtonCustom>
);