import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function dHL60_day5() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Day5 dHL60 motion</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/dHL60_day5/'} prefix={'surface_'} startnum={1} numfiles={100} />
        </Layout>
    )
}

export { dHL60_day5 }