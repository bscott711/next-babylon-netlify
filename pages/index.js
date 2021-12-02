import Layout from '@components/layout';
import App from '@components/babylonHooks';

export default function Box() {
    return (
        <Layout title={'One box is spinning'}>
            <strong>Example from the babylonjs-hook github repo</strong>
            <App canvasId={'renderCanvas'} />
        </Layout>
    )
}

export { Box }