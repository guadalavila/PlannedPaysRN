import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerStackList } from '~navigations/types';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CategoriesScreen'> {}
const CategoriesScreen = ({}: Props) => {
    return (
        <View>
            <Text>CategoriesScreen</Text>
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
