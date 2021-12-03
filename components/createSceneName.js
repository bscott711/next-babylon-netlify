export default function CreateSceneName(props) {
    let { scenesRoot, startNum, numFiles, filePrefix } = props;
    let numArray = Array.from(new Array(numFiles), (_x, i) => i + startNum);
    let sceneNames = numArray.map(x => scenesRoot + filePrefix + x + ".glb");
    return sceneNames
};

export { CreateSceneName }