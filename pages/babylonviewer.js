import Layout from '@components/layout';
import BabylonViewerScene from '@scenes/BabylonViewerScene:';

export default function BabylonViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <BabylonViewerScene />
        </Layout>
    )
}
