import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { spacing } from '~utils/spacing';
import Text from './Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~utils/colors';
import { typography } from '~utils/typography';
import { BottomStackType } from '~utils/types/BottomStack';

const CustomTabBar = ({ state, navigation, descriptors }: any) => {
    const { bottom } = useSafeAreaInsets();
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: themeApp.colors.bgInput, paddingBottom: bottom }]}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: String(route.key),
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity key={index} activeOpacity={0.7} onPress={onPress}>
                        <Icon
                            style={styles.icon}
                            name={getIcon(route.name)}
                            size={24}
                            color={!isFocused ? themeApp.colors.grey : themeApp.colors.primary}
                        />
                        {/* <Text style={styles.label}>{label}</Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const getIcon = (stack: BottomStackType) => {
    switch (stack) {
        case 'HomeStack':
            return 'home';
        case 'CardStack':
            return 'card';
        case 'SettingStack':
            return 'settings';
        default:
            return 'home';
    }
};

export default CustomTabBar;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.XXL,
        flexDirection: 'row',
        paddingVertical: spacing.XL,
        width: '100%',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: typography.size.XS,
    },
    icon: {
        alignSelf: 'center',
        marginBottom: spacing.M,
    },
});
