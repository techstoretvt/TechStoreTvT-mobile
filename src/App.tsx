import React from 'react';
// import type {PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';

import MainApp from './navigation/main_stack/main_stack';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MainApp />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
