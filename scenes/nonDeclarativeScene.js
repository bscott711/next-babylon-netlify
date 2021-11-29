import { Engine } from 'react-babylonjs';
import NonDeclarative from '@components/nonDeclarative';

export default function NonDeclarativeScene() {
    return (
        <Engine antialias adaptToDeviceRatio canvasId='renderCanvas'>
            <NonDeclarative />
        </Engine>
    )
}