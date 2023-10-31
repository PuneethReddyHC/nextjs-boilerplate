// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { AppThemeProvider } from '../themes/ThemeContext';
import { PersistGate } from 'redux-persist/integration/react';
import { lazy, Suspense } from 'react';
import { Base } from '@/templates/base';
import store, { persistor } from '../redux/store';

// Import your i18n configuration
import i18n from '../i18n';

const BoilerplateApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <I18nextProvider i18n={i18n}>
            <Base>
              <Component {...pageProps} />
            </Base>
          </I18nextProvider>
        </AppThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default BoilerplateApp;