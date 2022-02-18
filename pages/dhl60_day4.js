import Layout from '@components/layout';
import Viewer from '@components/Viewer';

export default function dHL60_day4() {
    return (
        <Layout title={'Babylon-Viewer'}>
            <strong>Day4 dHL60 motion</strong>
            <Viewer canvasId={'renderCanvas'} root={'assets/dHL60_day4/'} prefix={'surface_'} startnum={1} numfiles={100} />
        </Layout>
    )
}

export { dHL60_day4 }