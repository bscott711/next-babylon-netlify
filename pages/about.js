import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
export default function About() {
    return (
        <div>
            <Head>
                <title>This is an about!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <strong>it's ya boi </strong>
            <Footer />
        </div>
    )
}
