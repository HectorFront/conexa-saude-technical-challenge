/** @name Dependencies */
import {ElementType} from 'react';

export const Render: ElementType = ({ condition, children }: any): JSX.Element | null =>
    condition ? children : null;



