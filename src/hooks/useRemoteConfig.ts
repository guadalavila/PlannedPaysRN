import { useContext, useEffect } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import { ICategory } from '~models/Category';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';
import { ICard } from '~models/Card';

function useRemoteConfig() {
    const { setCategories, setCards } = useContext(RemoteConfigContext);

    useEffect(() => {
        remoteConfig()
            .setConfigSettings({
                minimumFetchIntervalMillis: 100,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then((fetchedRemotely) => {
                if (fetchedRemotely) {
                    const parameters = remoteConfig().getAll();
                    const cats = JSON.parse(parameters.categories.asString());
                    const cards = JSON.parse(parameters.cards.asString());

                    const categories = cats.categories.map((category: ICategory) => ({
                        id: category.id,
                        color: category.color,
                        icon: category.icon,
                        label: category.label,
                    }));
                    setCategories(categories);
                    const allCards = cards.cards.map((card: ICard) => ({
                        id: card.id,
                        brand: card.brand,
                        img: card.img,
                    }));
                    setCards(allCards);
                } else {
                    console.log(
                        'No configs were fetched from the backend, and the local configs were already activated',
                    );
                }
            });
    }, []);
}
export default useRemoteConfig;
