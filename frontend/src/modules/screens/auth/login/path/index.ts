import { lazy } from 'react';
import {ClientRoutes} from 'constants/client/routes';

const Path = [
    { path: ClientRoutes.LOGIN, component: lazy(() => import('modules/screens/auth/login/index')) }
]

export default Path;