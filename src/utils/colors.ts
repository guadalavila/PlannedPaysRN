const common = {
    // primary: '#c5f277',
    // primaryDark: '#B3D578',
    primary: '#FCAB10',
    primaryDark: '#FCAB10',
    secondary: '#4CE364',
    success: '#4CE364',
    tertiary: '#FFC700',
    white: '#FFFFFF',
    black: '#000000',
    separator: '#D1D1D1',
    grey: '#797979',
    error: '#DD0101',
};

const light = {
    ...common,
    background: '#EFEFEF',
    bgInput: '#FFFFFF',
    textInput: '#434343',
    bgCard: '#FFFFFF',
    textPrimary: '#000000',
};

const dark = {
    ...common,
    background: '#181818',
    bgInput: '#252525',
    textInput: '#FAFAFA',
    bgCard: '#252525',
    textPrimary: '#FAFAFA',
};
export const colors = { light, dark };
