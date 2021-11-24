import Head from 'next/head'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'

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
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}