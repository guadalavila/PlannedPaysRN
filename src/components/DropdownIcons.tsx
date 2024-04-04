import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import BottomSheetItem from './BottomSheetItem';
import Item from './Item';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { ICONS_BY_CATEGORY } from '~utils/icons';
import Title from './Title';
import IconButton from './IconButton';

interface IDropdownIconsProps {
    onSelect: (icon: string) => void;
}

const DropdownIcons = ({ onSelect }: IDropdownIconsProps) => {
    const ref = useRef();
    const { height } = useWindowDimensions();
    return (
        <View>
            <Item
                icon={'cash-outline'}
                text={'Icono'}
                color={colors.light.primaryDark}
                //@ts-ignore
                onPress={() => ref.current.show()}
                style={styles.containerItem}
            />
            <BottomSheetItem refBottomSheet={ref} height={height * 0.9}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.list}>
                        {Object.keys(ICONS_BY_CATEGORY).map((category) => (
                            <View key={category}>
                                <Title text={ICONS_BY_CATEGORY[category].label} />
                                <View style={styles.container}>
                                    {ICONS_BY_CATEGORY[category].icons.map((icon) => (
                                        <IconButton
                                            colorIcon={colors.light.black}
                                            icon={icon}
                                            onPress={() => {
                                                //@ts-ignore
                                                ref.current.close();
                                                onSelect(icon);
                                            }}
                                        />
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </BottomSheetItem>
        </View>
    );
};

export default DropdownIcons;

const styles = StyleSheet.create({
    containerItem: {
        marginVertical: spacing.S,
        marginHorizontal: spacing.L,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        position: 'relative',
        zIndex: 9999,
        marginTop: -6,
    },
    list: {
        marginBottom: spacing.XXL,
        paddingBottom: spacing.XXL,
    },
});
