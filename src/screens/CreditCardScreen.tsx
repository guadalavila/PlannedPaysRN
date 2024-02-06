import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import Container from '~components/Container';
import { DrawerStackList } from '~navigations/types';
import { ICreditCardResponse } from '~models/CreditCard';
import Fab from '~components/Fab';
import EmptyState from '~components/EmptyState';
import useCreditCard from '~hooks/useCreditCard';
import CreditCard from '~components/CreditCard';
import Title from '~components/Title';
import { spacing } from '~utils/spacing';
import IconButton from '~components/IconButton';
import Modal from '~components/Modal';

interface Props extends NativeStackScreenProps<DrawerStackList, 'CreditCardScreen'> {}
const CreditCardScreen = ({ navigation }: Props) => {
    const [cards, setCards] = useState<ICreditCardResponse[]>([]);
    const { width } = Dimensions.get('window');
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const { getCreditCards, deleteCreditCard } = useCreditCard();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getCreditCards().then((data) => setCards(data as ICreditCardResponse[]));
    }, []);

    const handleScroll = (event: any) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.round(contentOffset / width);
        if (selectedIndex >= 0 && selectedIndex !== selectedCardIndex) {
            setSelectedCardIndex(selectedIndex);
        }
    };

    const onEditCard = () => {
        console.log('You wanna edit card: ' + cards[selectedCardIndex].id);
    };

    const onDeleteCard = () => {
        setShowModal(false);
        deleteCreditCard(cards[selectedCardIndex].id);
    };

    return (
        <Container>
            {cards.length === 0 ? (
                <EmptyState title={'No tenes tarjetas agregadas'} icon='card-outline' />
            ) : (
                <View>
                    <FlatList
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        automaticallyAdjustContentInsets={true}
                        decelerationRate={0}
                        snapToInterval={Dimensions.get('window').width}
                        snapToAlignment={'center'}
                        renderItem={({ item }) => (
                            <View
                                key={item.id}
                                style={cards.length === 1 ? { width: width * 1 } : { width: width * 0.9 }}>
                                <CreditCard
                                    colorsCard={item.colors}
                                    name={item.name}
                                    card={item.card}
                                    numbers={item.number}
                                />
                            </View>
                        )}
                        data={cards}
                        style={[styles.flatListContainer]}
                        onScroll={handleScroll}
                    />
                    <View style={styles.containerOptions}>
                        <IconButton icon='pencil-outline' onPress={onEditCard} />
                        <IconButton icon='trash-outline' onPress={() => setShowModal(true)} />
                    </View>
                    <View style={styles.containerTransactions}>
                        <Title text='Transacciones'></Title>
                    </View>
                    <Modal
                        visible={showModal}
                        icon='trash-outline'
                        onPress={onDeleteCard}
                        onCancel={() => setShowModal(false)}
                        textButton='Confirmar'
                        title={`¿Querés eliminar esta tarjeta ${cards[selectedCardIndex].card.brand}?`}
                        subtitle='Si la eliminas, no vas a poder recuperarla '
                    />
                </View>
            )}
            <Fab icon='add' onPress={() => navigation.navigate('AddTransactionScreen')} />
        </Container>
    );
};

export default CreditCardScreen;

const styles = StyleSheet.create({
    flatListContainer: {},
    containerTransactions: {
        marginHorizontal: spacing.M,
    },
    containerOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: spacing.S,
    },
});
