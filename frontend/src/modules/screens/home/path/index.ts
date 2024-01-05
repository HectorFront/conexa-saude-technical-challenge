import { lazy } from 'react';
import {ClientRoutes} from 'constants/client/routes';

const Path = [
    { path: ClientRoutes.HOME, component: lazy(() => import('modules/screens/home/index')) }
]

export default Path;