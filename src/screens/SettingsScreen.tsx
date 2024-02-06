import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';
import Container from '~components/Container';
import useAuth from '~hooks/useAuth';
import Input from '~components/Input';
import Text from '~components/Text';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { typography } from '~utils/typography';

interface Props extends NativeStackScreenProps<DrawerStackList, 'SettingsScreen'> {}

const SettingsScreen = ({}: Props) => {
    const { user } = useAuth();
    return (
        <Container>
            <View style={styles.avatar}>
                <Text style={styles.textAvatar}>
                    {user.name.charAt(0).toUpperCase()}
                    {user.lastName.charAt(0).toUpperCase()}
                </Text>
            </View>
            <Input value={user.name} placeholder='Nombre' keyboardType='default' onChangeText={(value) => {}} />
            <Input value={user.lastName} placeholder='Nombre' keyboardType='default' onChangeText={(value) => {}} />
            <Input
                editable={false}
                value={user.email}
                placeholder='Nombre'
                keyboardType='default'
                onChangeText={(value) => {}}
            />
            {/* <PaletteColor  /> */}
        </Container>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    avatar: {
        marginVertical: spacing.XXL,
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: colors.light.primary,
        position: 'relative',
        justifyContent: 'center',
    },
    textAvatar: {
        color: colors.light.white,
        fontWeight: 'bold',
        fontSize: typography.size.XXXL,
        alignSelf: 'center',
    },
});
