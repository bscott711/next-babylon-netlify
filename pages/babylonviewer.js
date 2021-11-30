import Layout from '@components/layout';
import { Engine } from 'react-babylonjs';
import BJSViewer from '@components/BJSViewer';

export default function BabylonViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Interactive Isosurface Viewer</strong>
            <BJSViewer canvasId={'renderCanvas'} startNum={10} numFiles={50}/>
        </Layout>
    )
}
