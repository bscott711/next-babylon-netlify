import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function dHL60_day6() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Day6 dHL60 motion</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/dHL60_day6/'} prefix={'Surfaces_'} startnum={1} numfiles={100} />
        </Layout>
    )
}

export { dHL60_day6 }