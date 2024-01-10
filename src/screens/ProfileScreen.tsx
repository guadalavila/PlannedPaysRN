import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';

interface Props extends NativeStackScreenProps<DrawerStackList, 'ProfileScreen'> {}

const ProfileScreen = ({}: Props) => {
    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
