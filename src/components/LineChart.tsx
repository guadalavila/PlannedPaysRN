import React from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart as LineChartKit } from 'react-native-chart-kit';
import { colors } from '~utils/colors';
import { hexToRGB } from '~utils/helpers';
import Card from './Card';

interface ILineChart {
    title: string;
    labels: string[];
    data: number[];
    color?: string;
}

const LineChart = ({ title, labels, data, color = '#2C3D63' }: ILineChart) => {
    const { width } = Dimensions.get('window');

    const dataLine = {
        labels: labels,
        legend: [title],
        datasets: [
            {
                data: data,
                strokeWidth: 2,
                color: () => color,
            },
        ],
    };

    return (
        <Card>
            <LineChartKit
                data={dataLine}
                width={width * 0.9}
                height={256}
                verticalLabelRotation={30}
                bezier
                yAxisLabel='$'
                yAxisSuffix='$'
                yAxisInterval={1}
                chartConfig={{
                    backgroundGradientFrom: colors.light.white,
                    backgroundGradientTo: colors.light.white,
                    backgroundColor: colors.light.white,
                    decimalPlaces: 0,
                    color: () => hexToRGB(color),
                    labelColor: () => colors.light.primary,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: color,
                    },
                }}
            />
        </Card>
    );
};

export default LineChart;
