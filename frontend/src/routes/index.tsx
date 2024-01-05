/** @name Dependencies */
import {useContext, ElementType, ComponentType, LazyExoticComponent, ReactNode, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
/** @name External */
import {App, Auth} from 'template';
import {UserContext} from 'context/user';
import {ClientRoutes} from 'constants/client/routes';
import {ROUTES, PRIVATE_ROUTES} from 'modules/paths';
import {LoaderFallback} from "helpers/fallback";

import * as ContextInterfaces from 'context/context.interfaces';

interface SwitchRoutesProps {
    children?: ReactNode
}

interface RoutesComponentsProps {
    path: string,
    component: LazyExoticComponent<ComponentType> | ComponentType
}

const SwitchRoutes: ElementType = ({ children }: SwitchRoutesProps): JSX.Element => (
    <Suspense fallback={<LoaderFallback/>}>
        <Switch>
            {children}
        </Switch>
    </Suspense>
);

const RenderRoutes: ElementType = ({authenticated, routes, privateRoutes}): JSX.Element => {
    if (authenticated) {
        return (
            <App>
                {privateRoutes.map(({ path, component }: RoutesComponentsProps,  i: number) =>
                    <Route key={i} path={path} component={component}/>
                )}
            </App>
        );
    }
    return (
        <Auth>
            {routes.map(({ path, component }: RoutesComponentsProps, i: number) =>
                <Route key={i} path={path} component={component}/>
            )}
        </Auth>
    )
};

export const Routes: ElementType = (): JSX.Element => {
    const userContext = useContext<ContextInterfaces.UserContextProps>(UserContext);
    const userAuthenticated = userContext.token;
    return (
        <BrowserRouter>
            <SwitchRoutes>
                <RenderRoutes
                    routes={ROUTES}
                    privateRoutes={PRIVATE_ROUTES}
                    authenticated={userContext.token}
                />
            </SwitchRoutes>
            <Redirect from='*' to={ClientRoutes[!userAuthenticated ? 'LOGIN' : 'HOME']}/>
        </BrowserRouter>
    )
}