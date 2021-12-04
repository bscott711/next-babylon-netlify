import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/Eating/'} prefix={'Surfaces_'} startnum={19} numfiles={30} />
        </Layout>
    )
}

export { LocalViewer }