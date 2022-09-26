import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function LocalViewer() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Eating d3 HL60, served by Glitch</strong>
            <Viewer canvasId={'renderCanvas'} root={'https://cdn.glitch.global/'} prefix={'6be17edd-dcbb-423e-9d69-f82f3a6e02df/Eatd3HL_'} numfiles={150} />
        </Layout>
    )
}

export { LocalViewer }