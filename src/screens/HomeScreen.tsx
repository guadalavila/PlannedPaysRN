import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions, ScrollView } from 'react-native';
import Card from '~components/Card';
import { DrawerStackList } from '~navigations/types';
import Container from '~components/Container';
import useRemoteConfig from '~hooks/useRemoteConfig';
import { BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit';
import ProgressBar from '~components/ProgressBar';
import LineChart from '~components/LineChart';
import { getColor } from '~utils/helpers';
import { encrypt } from '~utils/encrypt';
import Text from '~components/Text';
import Fab from '~components/Fab';
import Header from '~components/Header';

interface Props extends NativeStackScreenProps<DrawerStackList, 'HomeScreen'> {}

const HomeScreen = ({ navigation }: Props) => {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const { width, height } = Dimensions.get('window');
    useEffect(() => {
        console.log(encrypt('123456'));
    }, []);

    const data = [
        {
            name: 'Seoul',
            population: 3,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Toronto',
            population: 4,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
    ];
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#08130D',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };

    const dataLine = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                data: [100, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(44, 61, 99, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],

        legend: ['Titulo'], // optional
    };

    const dataPg = {
        labels: ['Web servers', 'Operating systems', 'Programming languages', 'JavaScript', 'Web Frameworks'], // optional
        data: [0.2, 0.6, 0.8, 0.1, 0.25],
        colors: [
            'rgba(255, 0, 0,0.5)',
            'rgba(238, 130, 238,0.6)',
            'rgba(106, 90, 205,0.5)',
            'rgba(60, 179, 113,0.2)',
            'rgba(255, 172, 71 , 0.3)',
        ],
    };

    return (
        <Container>
            <Header title='Home' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card title='Tendencia de equilibrio'>
                    <Text>sdas</Text>
                    <Text>sdas</Text>
                </Card>
                {/* <PieChart
                    data={data}
                    width={width * 0.9}
                    height={height * 0.3}
                    chartConfig={chartConfig}
                    accessor={'population'}
                    backgroundColor={'transparent'}
                    paddingLeft={'15'}
                    // center={[10, 50]}
                    absolute
                /> */}
                <ProgressBar label='Compras' percent={30} />
                <ProgressBar label='Supermercado' percent={30} color={getColor()} />
                <ProgressBar label='Compras' percent={30} color={getColor()} />
                <LineChart
                    title='Visa'
                    data={[100, 45, 28, 80, 99, 77]}
                    labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']}
                />
                <LineChart
                    title='Mastercard'
                    data={[100, 45, 28, 80, 99, 77]}
                    labels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']}
                    color='#F3780C'
                />
            </ScrollView>
            <Fab icon='add' onPress={() => navigation.navigate('AddNewExpense')} />
        </Container>
    );
};

export default HomeScreen;
