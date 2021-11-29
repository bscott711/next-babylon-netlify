import { FreeCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';

export default async function BJSViewer(e) {
    const { scene, canvas } = e
    const engine = scene.getEngine();
    engine.displayLoadingUI();
    var sceneNames = await CreateSceneName();
    var camera = new FreeCamera("camera1", new Vector3(0, 0.3, -0.7), scene);
    Main(engine, scene, sceneNames)
}

export { BJSViewer }