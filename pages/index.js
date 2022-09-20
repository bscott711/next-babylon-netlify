import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function Index() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/sRBC_Ex0/'} prefix={'surface_'} numfiles={150} />
        </Layout>
    )
}

export { Index }