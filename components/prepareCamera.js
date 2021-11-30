import { Color3, CubeTexture } from '@babylonjs/core';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';

export default async function PrepareCamera(scene) {
    scene.createDefaultCamera(true, true);
    var helperCam = scene.cameras.pop();
    helperCam.name = "arcCam";
    helperCam.alpha = 3;
    helperCam.beta = 1;
    // Enable camera's behaviors
    helperCam.useFramingBehavior = true;
    let framingBehavior = helperCam.getBehaviorByName("Framing");
    framingBehavior.framingTime = 0;
    framingBehavior.elevationReturnTime = -1;
    let worldExtends = scene.getWorldExtends();
    framingBehavior.zoomOnBoundingInfo(worldExtends.min, worldExtends.max);
    helperCam.pinchPrecision = 200 / helperCam.radius;
    helperCam.lowerRadiusLimit = 50;
    helperCam.upperRadiusLimit = 1 * helperCam.radius;
    helperCam.radius = 800;
    helperCam.wheelDeltaPercentage = 0.01;
    helperCam.pinchDeltaPercentage = 0.01;
    helperCam.attachControl(true, true);
    helperCam.panningSensibility = 6.5;
    let light = new HemisphericLight("hemi", (0, 1, 0), scene);
    scene.lights.push(light);
    let helper = scene.createDefaultEnvironment();
    scene.environmentTexture = new CubeTexture("/textures/studio.env", scene);
    helper.setMainColor(Color3.Gray());
    scene.cameras[0] = helperCam;
    return helperCam;
}

export { PrepareCamera }