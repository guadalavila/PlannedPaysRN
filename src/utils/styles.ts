import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const GlobalStyles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    shadowCard: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    bold: {
        fontWeight: 'bold',
    },
    textCenter: {
        textAlign: 'center',
    },
});

export const headerStyle = {
    headerStyle: { backgroundColor: colors.light.primary },
    headerTintColor: colors.light.white,
};
