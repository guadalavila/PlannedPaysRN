import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View } from 'react-native';
import Container from '~components/Container';
import Fab from '~components/Fab';
import Text from '~components/Text';
import { DrawerStackList } from '~navigations/types';
import { colors } from '~utils/colors';
import { getColor } from '~utils/helpers';
import { CATEGORIES } from '~utils/mock';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CategoriesScreen'> {}
const CategoriesScreen = ({}: Props) => {
    return (
        <Container>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <View style={[styles.item, GlobalStyles.row]}>
                        <View style={[styles.avatar, { backgroundColor: getColor() }]} />
                        <Text style={[GlobalStyles.alignSelf, styles.text]}>{item.label}</Text>
                    </View>
                )}
                keyExtractor={(item) => item._id}
                onEndReachedThreshold={0.2}
            />
            <Fab onPress={() => {}} />
        </Container>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: colors.light.separator,
        padding: spacing.L,
        marginBottom: spacing.S,
    },
    text: {
        paddingHorizontal: spacing.S,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
});
