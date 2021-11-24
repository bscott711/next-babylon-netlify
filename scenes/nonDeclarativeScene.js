import { Engine, Scene } from 'react-babylonjs';
import NonDeclarative from '@components/nonDeclarative'

export default function NonDeclarativeScene() {
    return (
        <Engine antialias adaptToDeviceRatio canvasId='renderCanvas'>
            <Scene onSceneMount={NonDeclarative} />
        </Engine>
    )
}