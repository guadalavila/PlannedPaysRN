import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import Button from '~components/Button';
import Card from '~components/Card';
import Circle from '~components/Circle';
import Title from '~components/Title';
import { DrawerStackList } from '~navigations/types';
import { colors } from '~utils/colors';
import { STRINGS } from '~utils/strings';
import Fab from '~components/Fab';
import Container from '~components/Container';
import useRemoteConfig from '~hooks/useRemoteConfig';

interface Props extends NativeStackScreenProps<DrawerStackList, 'HomeScreen'> {}

const HomeScreen = ({ navigation }: Props) => {
    useRemoteConfig();
    return (
        <Container>
            <Card title='Tendencia de equilibrio'>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
            </Card>
            <Card title='Gastos'>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
                <Text>sdas</Text>
            </Card>
            <Button onPress={() => {}} title='Press me' />
            <Title text={STRINGS.HOME.still_to_be_paid} />
            <Circle backgroundColor={colors.light.primary}>
                <Text>&</Text>
            </Circle>
            <Fab icon='add' onPress={() => navigation.navigate('AddNewExpense')} />
        </Container>
    );
};

export default HomeScreen;
