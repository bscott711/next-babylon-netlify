import { useEffect, useState, useRef } from 'react'
import { useScene } from "react-babylonjs"
import { Camera } from '@babylonjs/core/Cameras'

const RenderOnCameraChange = ({ hardwareScaling }) => {
    const scene = useScene()
    const cameraChanged = useRef("render");
    const hardwareScalingFallback = useRef(1);

    const [camera, setCamera] = useState < Camera | undefined > (undefined);

    useEffect(() => {
        if (scene) {
            scene.activeCamera && setCamera(scene.activeCamera)
            const updateCamera = scene.onActiveCameraChanged.add(() => {
                scene.activeCamera && setCamera(scene.activeCamera)
            })
            return () => {
                scene.onActiveCameraChanged.remove(updateCamera)
            }
        }
    }, [scene])

    useEffect(() => {
        if (scene && camera) {
            const viewChanged = camera.onViewMatrixChangedObservable.add(() => {
                cameraChanged.current = "render";
            })
            return () => {
                camera.onViewMatrixChangedObservable.remove(viewChanged);
            }
        }
    }, [scene, camera])

    useEffect(() => {

        if (scene && camera) {
            const engine = scene.getEngine();

            hardwareScalingFallback.current = engine.getHardwareScalingLevel()
            //RENDER LOOP
            var renderLoop = function () {
                camera.update();
                if (cameraChanged.current === "render") {
                    // render scene - optionally with hardware scaling
                    if (hardwareScaling) {
                        hardwareScaling && engine.setHardwareScalingLevel(hardwareScaling);
                        cameraChanged.current = "reset";
                    } else {
                        cameraChanged.current = "norender"
                    }
                    scene.render(true, true)
                } else if (cameraChanged.current === "reset") {
                    // render scene with old hardwareScaling value
                    hardwareScaling && engine.setHardwareScalingLevel(hardwareScalingFallback.current);
                    scene.render(true, true)
                    cameraChanged.current = "norender"
                }
            };
            engine.stopRenderLoop();
            engine.runRenderLoop(renderLoop);
            return () => {
                engine.stopRenderLoop();
                engine.runRenderLoop(() => { scene.render() });
            }
        }
    }, [scene, camera])

    return <></>;
}

export default RenderOnCameraChange;