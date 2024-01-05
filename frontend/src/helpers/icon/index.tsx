/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';

type MaterialIconProps = {
    icon: string,
    style?: Object,
    type?: "outlined" | "filled" | "rounded" | "sharp" | "two-tone",
    size?: string,
    color?: string,
    hover?: boolean,
    pointer?: boolean,
}

export const MaterialIcon: ElementType = memo(({ type, size, color, hover = false, pointer = false, style = {}, ...props}: MaterialIconProps): JSX.Element =>
    <S.Icon
        {...props}
        hasHover={hover}
        pointer={pointer}
        className={`material-icons-${type ?? 'outlined'}`}
        style={{
            color: color ?? 'inherit',
            fontSize: `${size}px`  ?? '1.2em',
            ...style
        }}
    >
        {props.icon}
    </S.Icon>
);