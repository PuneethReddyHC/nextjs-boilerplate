// src/pages/_app.tsx
import { AppProps } from 'next/app'; // Import AppProps from 'next/app'
import { I18nextProvider } from 'react-i18next';
import store from '../redux/store';
import i18n from '../i18n';
import { Provider as ReduxProvider } from 'react-redux';
import { AppThemeProvider } from '../themes/ThemeContext'; 
import { Base } from '@/templates/base';

const BoilerplateApp = ({ Component, pageProps }: AppProps) => (
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

export default BoilerplateApp;
