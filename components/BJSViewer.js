import { FreeCamera, Vector3, HemisphericLight, PBRMetallicRoughnessMaterial, CubeTexture, MeshBuilder, Color3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';

export default function BJSViewer(e) {
    const { scene, canvas } = e
    let sceneNames = CreateSceneName();
    console.log(sceneNames)
    var camera = new FreeCamera("camera1", new Vector3(0, 0.3, -0.7), scene);
    camera.speed = 0.01;
    camera.minZ = 0.001;
    scene.activeCameras.push(camera);
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    var pbr = new PBRMetallicRoughnessMaterial("pbr", scene);
    pbr.environmentTexture = CubeTexture.CreateFromPrefilteredData("textures/environment.dds", scene);
    var sphereMat = pbr.clone();
    sphereMat.metallic = 0.1;
    sphereMat.roughness = 4;
    sphereMat.baseColor = Color3.White().scale(1 - (6 / 10))
    var sphere = MeshBuilder.CreateSphere();
    sphere.material = sphereMat;
    sphere.position.y = 1 * 0.3;
    sphere.position.x = 0.3;
    sphere.position.z = 4 * 0.4;
}
