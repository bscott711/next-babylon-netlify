import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Mouse Red Cell Internalization</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/mRBC_Ex0/'} prefix={'surface_'} numfiles={150} />
        </Layout>
    )
}

export { LocalViewer }