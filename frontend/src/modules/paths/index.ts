import Home from 'modules/screens/home/path';
import ClientLogin from 'modules/screens/auth/login/path';

export const ROUTES = [
    ...ClientLogin
];

export const PRIVATE_ROUTES = [
    ...Home
];