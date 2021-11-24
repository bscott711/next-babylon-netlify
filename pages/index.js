import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import SpinningBoxScene from '@scenes/SpinningBoxScene:';

export default function Home() {
    return (
        <div>
            <Head>
                <title>The all new BabylonJS-Viewer!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <strong> Welcome to the future of interactive data!</strong>
                <SpinningBoxScene />
            </main>
            <Footer />
        </div>
    );
}