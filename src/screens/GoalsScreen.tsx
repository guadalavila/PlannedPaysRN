import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import Goal from '~components/Goal';
import { DrawerStackList } from '~navigations/types';

interface Props extends NativeStackScreenProps<DrawerStackList, 'GoalsScreen'> {}

const GoalsScreen = ({}: Props) => {
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
            <View style={styles.bottom}>
                <Button title='Nuevo objetivo' onPress={() => {}} />
            </View>
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
