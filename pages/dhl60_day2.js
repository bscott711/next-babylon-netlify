import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function dHL60_day2() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Day2 dHL60 motion</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/dHL60_day2/'} prefix={'surface_'} startnum={1} numfiles={36} />
        </Layout>
    )
}

export { dHL60_day2 }