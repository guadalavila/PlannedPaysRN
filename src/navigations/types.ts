import { ICreditCard } from '~models/CreditCard';

export type RootStackLogoutParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
};

export type RootStackLoginParamList = {
    Drawer: undefined;
    AddCreditCardScreen: { card?: ICreditCard };
    NewGoalScreen: undefined;
    AddTransactionScreen: {
        card: ICreditCard;
    };
    IconsScreen: undefined;
};

export type DrawerStackList = {
    HomeScreen: undefined;
    CategoriesScreen: undefined;
    SettingsScreen: undefined;
    CreditCardScreen: undefined;
    AddNewExpense: undefined;
    GoalsScreen: undefined;
    NewGoalScreen: undefined;
    AddCreditCardScreen: { card?: ICreditCard };
    AddTransactionScreen: {
        card: ICreditCard;
    };
};
