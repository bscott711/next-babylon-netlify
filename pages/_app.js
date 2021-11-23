// import { Engine, Scene } from 'react-babylonjs';
// import { Vector3, Color3 } from '@babylonjs/core';
// import SpinningBox from '@components/SpinningBox';

import SpinningBoxScene from '@components/SpinningBoxScene';
import '@styles/globals.css';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';


export default function App() {
    return (
        <div>
            <Head>
                <title>The all new BabylonJS-Viewer!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header title="Welcome to the future of interactive data!" />
                <SpinningBoxScene />
            </main>
            <Footer />
        </div>
    );
}