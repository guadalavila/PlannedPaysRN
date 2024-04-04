import React, { useContext, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet } from 'react-native';
import Container from '~components/Container';
import Fab from '~components/Fab';
import { DrawerStackList } from '~navigations/types';
import ModalInput from '~components/ModalInput';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import ItemCategory from '~components/ItemCategory';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CategoriesScreen'> {}
const CategoriesScreen = ({}: Props) => {
    const [showModal, setShowModal] = useState(false);
    const { categories } = useContext(RemoteConfigContext);
    return (
        <Container>
            <FlatList
                data={categories}
                renderItem={({ item }) => <ItemCategory key={item.id} {...item} />}
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

const styles = StyleSheet.create({});
