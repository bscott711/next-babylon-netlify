import '@styles/globals.css';
import Layout from '@components/layout';

export default function Application({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}