import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';
import Container from '~components/Container';
import PaletteColor from '~components/PaletteColor';

interface Props extends NativeStackScreenProps<DrawerStackList, 'SettingsScreen'> {}

const SettingsScreen = ({}: Props) => {
    return (
        <Container>
            <View>
                <PaletteColor />
            </View>
        </Container>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
