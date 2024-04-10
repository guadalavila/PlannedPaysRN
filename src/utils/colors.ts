const common = {
    // primary: '#c5f277',
    // primaryDark: '#B3D578',
    primary: '#246B69',
    primaryDark: '#246B69',
    secondary: '#f9c975',
    success: '#4CE364',
    tertiary: '#f596a1',
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
    background: '#15142a',
    bgInput: '#24263a',
    textInput: '#FAFAFA',
    bgCard: '#252525',
    textPrimary: '#FAFAFA',
};
export const colors = { light, dark };
