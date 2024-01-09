import React, { useContext } from 'react';
import { StyleProp, Text as TextRN, TextStyle } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { typography } from '~utils/typography';

interface TextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle> | undefined;
    props?: any;
    testID?: string | undefined;
}
const Text = ({ children, style = {}, props = {}, testID }: TextProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <TextRN
            testID={testID}
            {...props}
            style={[{ color: themeApp.colors.textPrimary, fontSize: typography.size.S }, style]}>
            {children}
        </TextRN>
    );
};

export default Text;
