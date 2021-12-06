import { Slider, AdvancedDynamicTexture, Button, StackPanel, Control } from '@babylonjs/gui';
import { KeyboardEventTypes } from '@babylonjs/core/Events';
import { PrepareCamera } from '@components/prepareCamera';
import { xhrAll, loadLocalAsset, loadLocalAssetSync } from '@components/localLoaders';

export default async function Main(engine, scene, sceneNames) {
    let currentSceneIndex = 0;
    let isPlaying = false;
    await loadLocalAsset(scene, sceneNames[currentSceneIndex]);
    let camera = await PrepareCamera(scene);
    engine.hideLoadingUI();
    await sceneNames.map(file => xhrAll(file));

    // GUI generation
    let advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    let stackPanel = new StackPanel("stackPanel");
    stackPanel.isVertical = false;
    stackPanel.height = "100px";
    stackPanel.fontSize = "14px";
    stackPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
    let stackOutside = new StackPanel("stackOutside");
    stackOutside.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    stackOutside.addControl(stackPanel);
    advancedTexture.addControl(stackOutside);
    let button = Button.CreateSimpleButton("Play", "Play");
    button.width = "50px";
    button.height = "25px";
    button.color = "white";
    button.background = "gray";
    button.onPointerDownObservable.add(() => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            button.textBlock.text = "Pause";
            slider.handle = setInterval(() => {
                currentSceneIndex = ++currentSceneIndex % sceneNames.length;
                slider.value = currentSceneIndex;
            }, 83);
        } else {
            button.textBlock.text = "Play";
            clearInterval(slider.handle);
        }
    });
    stackPanel.addControl(button);
    let slider = new Slider("FrameSlider");
    slider.value = currentSceneIndex;
    slider.minimum = 0;
    slider.maximum = sceneNames.length - 1;
    slider.step = 1;
    slider.isThumbCircle = true;
    slider.isThumbClamped = true;
    slider.height = "20px";
    slider.width = "200px";
    slider.onValueChangedObservable.add(value => {
        loadLocalAssetSync(scene, sceneNames[value]);
        currentSceneIndex = value;
    });
    slider.onPointerDownObservable.add(() => {
        if (isPlaying) {
            button.textBlock.text = "Play";
            clearInterval(slider.handle);
        }
    });
    stackPanel.addControl(slider);
    slider.value = currentSceneIndex;

    // Switch to next scene when x is pressed and previous when z is pressed
    scene.onKeyboardObservable.add(kbInfo => {
        switch (kbInfo.type) {
            case KeyboardEventTypes.KEYDOWN:
                switch (kbInfo.event.key) {
                    case "z":
                        if (isPlaying) {
                            clearInterval(slider.handle);
                            button.textBlock.text = "Play";
                            isPlaying = !isPlaying;
                        }
                        --currentSceneIndex;
                        if (currentSceneIndex < 0) {
                            currentSceneIndex = sceneNames.length - 1;
                        }
                        slider.value = currentSceneIndex;
                        break;
                    case "x":
                        if (isPlaying) {
                            clearInterval(slider.handle);
                            button.textBlock.text = "Play";
                            isPlaying = !isPlaying;
                        }
                        currentSceneIndex = ++currentSceneIndex % sceneNames.length;
                        slider.value = currentSceneIndex;
                        break;
                }
                break;
        }
    });
    return camera
}

export { Main }