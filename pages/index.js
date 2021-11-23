import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import createScene from "@components/createScene";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The all new BabylonJS-Viewer!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the future of interactive data!" />
        <p className="description">
          Introducing the BabylonJS-Viewer
        </p>

      </main>

      <Footer />
    </div>
  )
}
