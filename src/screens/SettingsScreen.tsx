import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';

interface Props extends NativeStackScreenProps<DrawerStackList, 'SettingsScreen'> {}

const SettingsScreen = ({}: Props) => {
    return (
        <View>
            <Text>SettingScreen</Text>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
