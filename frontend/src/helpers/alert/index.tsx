/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

type AlertProps = {
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark",
    title?: string,
    show?: boolean,
    className?: string,
    children: ReactNode
}

export const Alert: ElementType = memo(({ type, title = '', className = '', show = true, children, ...props }: AlertProps): JSX.Element =>
    <div
        {...props}
        role="alert"
        className={`alert alert-${type ?? 'info'} alert-dismissible fade ${show ? 'show' : ''} ${className}`}
    >
        {title && <strong>{title}</strong>} {children}
    </div>
);