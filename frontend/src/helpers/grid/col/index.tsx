/**
 * @author Hector Rodrigues da Silva
 */

/** @name Dependencies */
import {memo, ElementType, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';

type ColProps = {
    style?: Object,
    cols?: string,
    children: ReactNode
}

type ColumnsProps = string[] | number[] | undefined;

/** @name Constants */
const MAX_COLUMNS: number = 5;
const MAX_SIZE_COLUMN: number = 12;

export const Col: ElementType = memo(({ cols = '', children, ...props }: ColProps): JSX.Element => {

    const [classNames, setClassNames] = useState('');

    const columns: ColumnsProps = useMemo(() => cols.split(' '), [cols]);

    /**
     * Add if contains additional ClassName in Cols
     */
    const handleClassNames = useCallback(() => {
        let classNames: string = '';
        if(columns.length >= MAX_COLUMNS) {
            columns.slice(MAX_COLUMNS, columns.length)
                .forEach(className => {
                    if(className) classNames += ` ${className}`;
                });
            return setClassNames(classNames);
        }
    },[columns]);

    useEffect(() => {
        return handleClassNames();
    },[cols]);

    const [
        sm = MAX_SIZE_COLUMN,
        md = MAX_SIZE_COLUMN,
        lg = MAX_SIZE_COLUMN,
        xl = MAX_SIZE_COLUMN,
        xxl = MAX_SIZE_COLUMN
    ]: ColumnsProps = columns;

    return (
        <div
            {...props}
            className={`col-12 col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} col-xxl-${xxl}${classNames}`}
        >
            {children}
        </div>
    )
});