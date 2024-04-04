import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { spacing } from '~utils/spacing';
import Text from './Text';

interface IPickerProps {
    label: string;
    isOpen: boolean;
    children: React.ReactNode;
}

const Picker = ({ label, isOpen, children }: IPickerProps) => {
    const [open, setOpen] = useState(isOpen);

    return (
        <>
            <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => setOpen(!open)}>
                <Text>{label}</Text>
            </TouchableOpacity>
            {open && <View>{children}</View>}
        </>
    );
};

export default Picker;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: spacing.XL,
        paddingHorizontal: spacing.L,
        marginHorizontal: spacing.L,
        marginTop: spacing.M,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
