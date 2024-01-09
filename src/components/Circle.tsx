import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CircleProps {
    backgroundColor: string;
    children: React.ReactNode;
    width?: number;
}

const Circle = ({ backgroundColor, children, width = 50 }: CircleProps) => {
    return (
        <View style={[{ backgroundColor: backgroundColor, width: width, height: width, borderRadius: width }]}>
            <View style={styles.children}>{children}</View>
        </View>
    );
};

export default Circle;

const styles = StyleSheet.create({
    children: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
