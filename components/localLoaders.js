import '@babylonjs/loaders/glTF';
import { SceneLoader, Axis, Space } from '@babylonjs/core';

export async function xhrAll(url) {
    let xhr = new XMLHttpRequest();
    var reqHeader = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "binary",
        mode: "cors"
    });
    xhr.open("GET", url, reqHeader);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log('Error:' + xhr.status);
            return;
        }
    };
}

export async function loadLocalAsset(scene, sceneName) {
    let old = scene.getNodeByName("__root__");
    let asset = await SceneLoader.LoadAssetContainerAsync(sceneName).then(container => {
        let rootMesh = container.meshes[0];
        rootMesh.rotationQuaternion = null;
        rootMesh.rotate(Axis.X, Math.PI / 2, Space.LOCAL);
        let materials = container.materials;
        materials.forEach((mat, _x) => {
            mat.clearCoat.isEnabled = true;
            mat.clearCoat.intensity = 1;
            mat.clearCoat.roughness = 0.5;
        });
        return container;
    });
    asset.addAllToScene();
    scene.render(true, true);
    if (old != null) {
        old.dispose();
        scene.render(true, true);
    }
}

export default function loadLocalAssetSync(scene, scene_name) {
    let asset = SceneLoader.LoadAssetContainer(
        scene_name,
        "",
        scene,
        function (container) {
            let rootMesh = container.meshes[0];
            rootMesh.rotationQuaternion = null;
            rootMesh.rotate(Axis.X, Math.PI / 2, Space.LOCAL);
            let materials = container.materials;
            materials.forEach((mat, _x) => {
                mat.clearCoat.isEnabled = true;
                mat.clearCoat.intensity = 1;
                mat.clearCoat.roughness = 0.5;
            });
            container.addAllToScene();
            scene.rootNodes[0].dispose();
            scene.render(true, true);
            return container;
        }
    );
    scene.render(true, true);
    return asset;
}
export { loadLocalAssetSync };
