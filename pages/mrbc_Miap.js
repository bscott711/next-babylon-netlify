import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Mouse Red Cell Miap Blocking</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/mRBC_Miap/'} prefix={'surface_'} numfiles={115} />
        </Layout>
    )
}

export { LocalViewer }