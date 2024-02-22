// In a new, temporary file 'SimpleTranslationTest.js'
import React from 'react';
import * as T from 'react-i18next';

const SimpleTranslationTest = () => {

    return (
        <div>
            <h1>{T('TestKey')}</h1>
        </div>
    );
}

export default SimpleTranslationTest;