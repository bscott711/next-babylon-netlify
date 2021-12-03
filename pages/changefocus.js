import Layout from '@components/layout';
import NonDeclarative from '@components/nonDeclarative';

export default function ChangeFocus() {
    return (
        <Layout title={'My focus is drifting'}>
            <strong>Example from the create-react-babylon github repo</strong>
            <NonDeclarative canvasId={'renderCanvas'} />
        </Layout>
    )
}

export { ChangeFocus }