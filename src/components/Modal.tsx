import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Overlay from './Overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { GlobalStyles } from '~utils/styles';
import { spacing } from '~utils/spacing';
import Button from './Button';
import { typography } from '~utils/typography';
import { ThemeContext } from '~contexts/ThemeContext';
import Text from './Text';

interface IModalProps {
    icon: string;
    title: string;
    onPress: () => void;
    onCancel: () => void;
    textButton: string;
    visible: boolean;
    subtitle?: string;
}

const Modal = ({ icon, title, onPress, onCancel, textButton, visible = false, subtitle }: IModalProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <>
            {visible ? (
                <Overlay
                    isVisible
                    backdropStyle={[styles.backdrop]}
                    overlayStyle={[styles.overlay, { backgroundColor: themeApp.colors.bgCard }]}>
                    <View style={styles.container}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.containerClose} onPress={onCancel}>
                            <Icon name='close-outline' color={colors.light.primaryDark} size={26} />
                        </TouchableOpacity>
                        <View style={GlobalStyles.alignSelf}>
                            <Icon name={icon} size={60} color={colors.light.primaryDark} />
                        </View>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                        <Button title={textButton} onPress={onPress} />
                    </View>
                </Overlay>
            ) : (
                <View />
            )}
        </>
    );
};

export default Modal;

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(42, 42, 60, 0.45)',
    },
    overlay: {
        top: '30%',
        position: 'absolute',
        borderRadius: 14,
        width: '85%',
        height: '43%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
    },
    container: {
        marginVertical: spacing.XL,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontWeight: '500',
        fontSize: typography.size.XL,
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: '500',
        color: colors.light.grey,
        textAlign: 'center',
    },
    containerClose: {
        alignSelf: 'flex-end',
        marginHorizontal: spacing.S,
    },
});
