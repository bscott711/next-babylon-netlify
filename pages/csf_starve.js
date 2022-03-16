import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>CSF-1 Starved: AktPH [0-5]</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/csf1_starve/'} prefix={'Surfaces_'} numfiles={75} />
        </Layout>
    )
}

export { LocalViewer }