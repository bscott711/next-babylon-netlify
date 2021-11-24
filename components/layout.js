import Link from 'next/link'
import Head from 'next/head'
import Footer from '@components/Footer';

export default function Layout({
    children,
    title = 'The all new BabylonJS-Viewer!',
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
                    |
                    <Link href="/about">
                        <a>About</a>
                    </Link>{' '}
                </nav>
            </header>
            <main>
                {children}

            </main>
            <Footer />
        </div>
    )
}