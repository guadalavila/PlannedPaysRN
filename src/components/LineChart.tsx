import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { LineChart as LineChartKit } from 'react-native-chart-kit';
import { hexToRGB } from '~utils/helpers';
import Card from './Card';
import { ThemeContext } from '~contexts/ThemeContext';
import { colors } from '~utils/colors';

interface ILineChart {
    title: string;
    labels: string[];
    data: number[];
    color?: string;
}

const LineChart = ({ title, labels, data, color = colors.light.primary }: ILineChart) => {
    const { width } = Dimensions.get('window');
    const { themeApp } = useContext(ThemeContext);

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
                    backgroundGradientFrom: themeApp.colors.bgCard,
                    backgroundGradientTo: themeApp.colors.bgCard,
                    backgroundColor: themeApp.colors.bgCard,
                    decimalPlaces: 0,
                    color: () => hexToRGB(color),
                    labelColor: () => themeApp.colors.textInput,
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
