import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet } from 'react-native';
import Container from '~components/Container';
import Goal from '~components/Goal';
import { DrawerStackList } from '~navigations/types';
import Fab from '~components/Fab';

interface Props extends NativeStackScreenProps<DrawerStackList, 'GoalsScreen'> {}

const GoalsScreen = ({ navigation }: Props) => {
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Goal title='Auto' icon='car-sport' percentage={10} />
                <Goal title='Auto' icon='car-sport' percentage={10} />
                <Goal title='Auto' icon='car-sport' percentage={10} />
                <Goal title='Auto' icon='car-sport' percentage={10} />
                <Goal title='Auto' icon='car-sport' percentage={10} />
                <Goal title='Auto' icon='car-sport' percentage={10} />
                <Goal title='Auto' icon='car-sport' percentage={10} />
            </ScrollView>
            <Fab icon='add' onPress={() => navigation.navigate('NewGoalScreen')} />
        </Container>
    );
};

export default GoalsScreen;

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});
