import Layout from '@components/layout';
import { Engine } from 'react-babylonjs';
import BJSViewer from '@components/BJSViewer';

export default function BabylonViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <Engine antialias adaptToDeviceRatio canvasId='renderCanvas'>
                <BJSViewer />
            </Engine>
        </Layout>
    )
}
