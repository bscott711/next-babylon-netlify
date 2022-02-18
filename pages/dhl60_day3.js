import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function dHL60_day3() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Day3 dHL60 motion</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/dHL60_day3/'} prefix={'surface_'} startnum={1} numfiles={50} />
        </Layout>
    )
}

export { dHL60_day3 }