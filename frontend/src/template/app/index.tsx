/** @name Dependencies */
import {memo, ElementType, ReactNode } from 'react';
/** @name Internal */
import {Help} from "./help";
import {NavBar} from "./navbar";

interface AppProps {
    children: ReactNode
}

export const App: ElementType = memo(({ children }: AppProps): JSX.Element => {
    return (
        <>
            <NavBar/>
            <div>{children}</div>
            <Help/>
        </>
    );
});