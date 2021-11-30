import Layout from '@components/layout';
import { Engine } from 'react-babylonjs';
import NonDeclarative from '@components/nonDeclarative';

export default function ChangeFocus() {
    return (
        <Layout title={'My focus is drifting'}>
            <strong>Example from the create-react-babylon github repo</strong>
            <Engine antialias adaptToDeviceRatio canvasId='renderCanvas'>
                <NonDeclarative />
            </Engine>
        </Layout>
    )
}
