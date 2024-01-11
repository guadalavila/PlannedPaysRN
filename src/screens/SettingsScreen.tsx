import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';
import Container from '~components/Container';
import Text from '~components/Text';

interface Props extends NativeStackScreenProps<DrawerStackList, 'SettingsScreen'> {}

const SettingsScreen = ({}: Props) => {
    return (
        <Container>
            <View>
                <Text>Color </Text>
            </View>
        </Container>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
