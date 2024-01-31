import React, { useContext, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View } from 'react-native';
import Container from '~components/Container';
import Fab from '~components/Fab';
import Text from '~components/Text';
import { DrawerStackList } from '~navigations/types';
import { colors } from '~utils/colors';
import { spacing } from '~utils/spacing';
import { GlobalStyles } from '~utils/styles';
import ModalInput from '~components/ModalInput';
import Icon from 'react-native-vector-icons/Ionicons';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CategoriesScreen'> {}
const CategoriesScreen = ({}: Props) => {
    const [showModal, setShowModal] = useState(false);
    const { categories } = useContext(RemoteConfigContext);
    return (
        <Container>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <View style={[styles.item, GlobalStyles.row]} key={item.id}>
                        <View style={[styles.avatar, { backgroundColor: item.color }]}>
                            <Icon name={item.icon} size={22} color={colors.light.white} />
                        </View>
                        <Text style={[GlobalStyles.alignSelf, styles.text]}>{item.label}</Text>
                    </View>
                )}
                onEndReachedThreshold={0.2}
            />
            <Fab icon='add' onPress={() => setShowModal(!showModal)} />
            <ModalInput
                loading={false}
                title='Nueva Categoria'
                visible={showModal}
                confirmButton='Guardar'
                cancelButton='Cancelar'
                onCancelPressed={() => setShowModal(false)}
                onConfirmPressed={() => setShowModal(!showModal)}
            />
        </Container>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: colors.light.separator,
        padding: spacing.L,
        marginVertical: spacing.S,
        backgroundColor: colors.light.white,
        marginHorizontal: spacing.L,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    text: {
        paddingHorizontal: spacing.S,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
