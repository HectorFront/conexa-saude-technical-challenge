/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';

type LoadingDefaultProps = {
    size?: string,
    style?: Object,
    color?: string,
}

export const LoadingDefault: ElementType = memo(({ size, color, style = {}, ...props}: LoadingDefaultProps): JSX.Element =>
    <S.Loading
        {...props}
        className="material-icons-outlined"
        style={{
            fontSize: `${size}px` ?? '1.2em',
            color: color ?? 'inherit',
            ...style
        }}
    >
        refresh
    </S.Loading>
);