export default function CreateSceneName(scenesRoot = "https://cdn.glitch.me/", startNum = 1, numFiles = 100, filePrefix = "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_") {
    let numArray = Array.from(new Array(numFiles), (_x, i) => i + startNum);
    let sceneNames = numArray.map(x => scenesRoot + filePrefix + x + ".glb");
    return { sceneNames }
};
export { CreateSceneName }