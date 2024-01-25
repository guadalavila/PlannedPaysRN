import { useContext, useEffect } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import { ICategory } from '~models/Category';
import { CategoriesContext } from '~contexts/CategoriesContext';

function useRemoteConfig() {
    const { setCategories } = useContext(CategoriesContext);

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
                    const categories = cats.categories.map((category: ICategory) => ({
                        id: category.id,
                        color: category.color,
                        icon: category.icon,
                        label: category.label,
                    }));
                    setCategories(categories);
                } else {
                    console.log(
                        'No configs were fetched from the backend, and the local configs were already activated',
                    );
                }
            });
    }, []);
}
export default useRemoteConfig;
