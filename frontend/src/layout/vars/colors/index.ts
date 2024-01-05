type envProps = {
    [index: string]: string | undefined
}

const env: envProps = process.env;

const Colors: envProps = {
    DARK: env.REACT_APP_DARK_COLOR,
    LIGHT: env.REACT_APP_LIGHT_COLOR,
    DEFAULT: env.REACT_APP_DEFAULT_COLOR,
    SECONDARY: env.REACT_APP_SECONDARY_COLOR
};

export default Colors;