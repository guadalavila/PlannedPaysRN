import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
//@ts-ignore
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { ThemeContext } from '~contexts/ThemeContext';

interface IBottomSheetItemProps {
    refBottomSheet: React.MutableRefObject<undefined>;
    height: number;
    children: React.ReactNode;
}

const BottomSheetItem = ({ refBottomSheet, height, children }: IBottomSheetItemProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <BottomSheet
            sheetBackgroundColor={themeApp.colors.bgInput}
            hasDraggableIcon
            ref={refBottomSheet}
            height={height}>
            <View>{children}</View>
        </BottomSheet>
    );
};

export default BottomSheetItem;

const styles = StyleSheet.create({});
