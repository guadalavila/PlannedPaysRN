import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '~components/Button';
import Container from '~components/Container';
import IconButton from '~components/IconButton';
import Title from '~components/Title';
import { RootStackLoginParamList } from '~navigations/types';
import { colors } from '~utils/colors';
import { ICONS_BY_CATEGORY } from '~utils/icons';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'IconsScreen'> {}

const IconsScreen = ({ navigation, route }: Props) => {
    const [icon, setIcon] = useState<string>('');

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 70 }}>
                    {Object.keys(ICONS_BY_CATEGORY).map((category) => (
                        <View key={category}>
                            <Title text={ICONS_BY_CATEGORY[category].label} />
                            <View style={styles.container}>
                                {ICONS_BY_CATEGORY[category].icons.map((icon) => (
                                    <IconButton
                                        colorIcon={colors.light.black}
                                        icon={icon}
                                        onPress={() => setIcon(icon)}
                                    />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.float}>
                <Button
                    disabled={icon === ''}
                    title='Seleccionar'
                    onPress={() => navigation.navigate('AddTransactionScreen')}
                />
            </View>
        </Container>
    );
};

export default IconsScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        position: 'relative',
        zIndex: 9999,
        marginTop: -6,
    },
    float: {
        position: 'absolute',
        bottom: 0,
        width: '80%',
        alignSelf: 'center',
    },
});
