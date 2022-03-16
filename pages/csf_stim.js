import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Intensity Mapped Surface</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/csf1_stim/'} prefix={'Surfaces_'} numfiles={75} />
        </Layout>
    )
}

export { LocalViewer }