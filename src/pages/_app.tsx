// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { AppThemeProvider } from '../themes/ThemeContext';
import { Base } from '@/templates/base';

// Import your Redux store
import store from '../redux/store';

// Import your i18n configuration
import i18n from '../i18n';

const BoilerplateApp = ({ Component, pageProps }: AppProps) => {
  // Register the service worker on app mount
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <ReduxProvider store={store}>
      <AppThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Base>
            <Component {...pageProps} />
          </Base>
        </I18nextProvider>
      </AppThemeProvider>
    </ReduxProvider>
  );
};

export default BoilerplateApp;