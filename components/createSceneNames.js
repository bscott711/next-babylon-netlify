
export default function createSceneNames(
    scenesRoot = "https://cdn.glitch.me/",
    startNum = 1,
    numFiles = 100,
    filePrefix = "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"
) {
    let numArray = Array.from(new Array(numFiles), (_x, i) => i + startNum);
    return numArray.map(x => scenesRoot + filePrefix + x + ".glb");
}

export { createSceneNames };