import { AppProps } from 'next/app';

import '../styles/main.css';
import 'ui-neumorphism/dist/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
