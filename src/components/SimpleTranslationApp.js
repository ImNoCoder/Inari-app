import React from 'react';
import SimpleTranslationTest from './SimpleTranslationTest';
import i18n from './i18n'; // Assuming './i18n' is your configuration file
import { I18nextProvider } from 'react-i18next';

const SimpleTranslationApp = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <SimpleTranslationTest />
        </I18nextProvider>
    )
}
export default SimpleTranslationApp