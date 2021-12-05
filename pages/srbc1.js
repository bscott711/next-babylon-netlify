import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/sRBC_Ex1/'} prefix={'surface_'} numfiles={150} />
        </Layout>
    )
}

export { LocalViewer }