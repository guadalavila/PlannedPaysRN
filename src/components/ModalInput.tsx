import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import Overlay from './Overlay';
import { colors } from '~utils/colors';
import Text from './Text';
import { TextInput } from 'react-native-gesture-handler';
import { spacing } from '~utils/spacing';

interface ModalInputProps {
    title: string;
    confirmButton: string;
    visible: boolean;
    onConfirmPressed: (newValue: string) => void;
    loading: boolean;
    cancelButton?: string;
    onCancelPressed?: () => void;
}
const ModalInput = ({
    title,
    cancelButton,
    confirmButton,
    onConfirmPressed,
    onCancelPressed,
    loading,
    visible,
}: ModalInputProps) => {
    const [name, setName] = useState('');

    return (
        <>
            {visible && (
                <Overlay isVisible backdropStyle={styles.backdrop} overlayStyle={[styles.overlay]}>
                    <View>
                        <View style={styles.containerInfo}>
                            <Text style={styles.title}>{title}</Text>
                            <TextInput
                                placeholder={'Ingresá..'}
                                numberOfLines={1}
                                // placeholderTextColor={themeApp.colors.textInput}
                                style={[
                                    styles.input,
                                    {
                                        // borderColor: themeApp.colors.backgroundInput,
                                        // color: themeApp.colors.textInput,
                                        // backgroundColor: themeApp.colors.input,
                                    },
                                ]}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <View style={styles.containerButtons}>
                            <TouchableOpacity
                                disabled={name.replace(/\s/g, '').length < 1}
                                onPress={() => {
                                    onConfirmPressed(name);
                                    setName('');
                                }}
                                activeOpacity={0.7}
                                style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    {loading ? (
                                        <ActivityIndicator size={'small'} color={'white'} />
                                    ) : (
                                        <Text style={[styles.textButtonPrimary]}>{confirmButton}</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                            {cancelButton ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        setName('');
                                        onCancelPressed && onCancelPressed();
                                    }}
                                    activeOpacity={0.7}
                                    style={styles.buttonContainer}>
                                    <View style={styles.buttonOutline}>
                                        <Text style={[styles.textButtonSecondary, { color: colors.light.primary }]}>
                                            {cancelButton}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </View>
                </Overlay>
            )}
        </>
    );
};

export default ModalInput;

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(42, 42, 60, 0.45)',
    },
    overlay: {
        top: '30%',
        position: 'absolute',
        borderRadius: 5,
        width: '94%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
        backgroundColor: 'white',
    },
    containerInfo: {
        paddingHorizontal: spacing.M,
        marginTop: spacing.XL,
    },
    title: {
        paddingBottom: spacing.XL,
        fontWeight: '600',
        alignSelf: 'center',
    },
    buttonContainer: {
        width: '40%',
    },
    button: {
        backgroundColor: colors.light.primary,
        paddingVertical: spacing.L,
        borderRadius: spacing.M,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: spacing.M,
        marginTop: spacing.L,
        paddingHorizontal: spacing.XL,
        paddingVertical: spacing.L,
        marginVertical: spacing.L,
    },
    buttonOutline: {
        borderColor: colors.light.primary,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
    },
    textButtonSecondary: {},
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: spacing.XL,
    },
    textButtonPrimary: {
        color: colors.light.white,
    },
});
