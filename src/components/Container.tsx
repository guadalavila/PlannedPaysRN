import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { GlobalStyles } from '~utils/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from './Loading';
import { StateContext } from '~contexts/StateContext';

interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    const {
        themeApp: { colors },
        theme,
    } = useContext(ThemeContext);
    const { top, bottom } = useSafeAreaInsets();
    const { loading } = useContext(StateContext);

    return (
        <>
            <StatusBar translucent barStyle={'light-content'} />
            <View style={[styles.container, { backgroundColor: colors.background, paddingBottom: bottom }]}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <View style={GlobalStyles.flex1}>{loading ? <Loading /> : children}</View>
                </KeyboardAvoidingView>
            </View>
        </>
    );
};

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
