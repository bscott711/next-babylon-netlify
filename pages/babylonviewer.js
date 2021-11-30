import Layout from '@components/layout';
import { Engine, Scene } from 'react-babylonjs';
import Viewer from '@components/Viewer';

export default function BabylonViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <Engine antialias adaptToDeviceRatio canvasId={'renderCanvas'}>
                <Scene>
                    <Viewer canvasId={'renderCanvas'} startNum={10} numFiles={50} />
                </Scene>
            </Engine>
        </Layout>
    )
}
