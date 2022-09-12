import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Eating d3 HL60</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/eatd3_Ex0/'} prefix={'Surfaces_'} numfiles={150} />
        </Layout>
    )
}

export { LocalViewer }