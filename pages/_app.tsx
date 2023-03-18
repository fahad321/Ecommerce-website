import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AuthProvider } from '../state/auth/AuthContext';
import { store } from '../store/app/store';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return <AuthProvider>
    <Provider store={store}>
    {getLayout(<Component {...pageProps} />)}
    </Provider>
    </AuthProvider>;
}

export default MyApp;
