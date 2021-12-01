import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function BabylonViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <Viewer canvasId={'renderCanvas'} startNum={1} numFiles={100} />
        </Layout>
    )
}

export { BabylonViewer }