/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, ElementType, ReactNode} from 'react';

type RowProps = {
    className?: string,
    children: ReactNode
}

export const Row: ElementType = memo(({ className = '', children, ...props }: RowProps): JSX.Element =>
    <div {...props} className={`row ${className}`}>
        {children}
    </div>
);