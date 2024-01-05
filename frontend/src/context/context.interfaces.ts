export interface UserStateProps {
    name: string | boolean
}

export interface UserContextProps {
    state: UserStateProps,
    token: string | Object,
    handleToken: Function,
    handleKeyState: Function,
    handleState: Function,
    handleKeyStateObject: Function
}