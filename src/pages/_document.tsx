import Document, { Head, Html, Main, NextScript } from 'next/document';
import { I18nextProvider } from 'react-i18next';
import store from '../redux/store';
import i18n from '../i18n';
import { Provider as ReduxProvider } from 'react-redux';
import { AppConfig } from '../utils/AppConfig';
import { AppThemeProvider } from '../themes/ThemeContext'; 

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
    <ReduxProvider store={store}>
      <AppThemeProvider>
        <I18nextProvider i18n={i18n}>
            <Html lang={AppConfig.locale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </I18nextProvider>
      </AppThemeProvider>
    </ReduxProvider>
    );
  }
}

export default MyDocument;