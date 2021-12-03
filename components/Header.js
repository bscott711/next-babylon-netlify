import Head from 'next/head';

export default function Header(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
export { Header }