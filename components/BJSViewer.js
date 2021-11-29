import { ArcRotateCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';

export default async function BJSViewer(e) {
    const { scene, canvas } = e
    const engine = scene.getEngine();
    engine.displayLoadingUI();
    var sceneNames = await CreateSceneName();
    new ArcRotateCamera("RequiredCam", new Vector3(0, 0.3, -0.7), scene);
    Main(engine, scene, sceneNames);

}

export { BJSViewer }