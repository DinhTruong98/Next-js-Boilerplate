import '../styles/main.css';
import 'ui-neumorphism/dist/index.css';
import { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MoralisProvider
    appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID || ''}
    serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_ID || ''}
  >
    <Component {...pageProps} />
  </MoralisProvider>
);

export default MyApp;
