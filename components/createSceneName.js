export default function CreateSceneName(props) {
    let defaultProps = {
        scenesRoot: "https://cdn.glitch.me/",
        startNum: 1,
        numFiles: 100,
        filePrefix: "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"
    }

    let scenesRoot = (props.scenesRoot || defaultProps.scenesRoot)
    let startNum = (props.startNum || defaultProps.startNum)
    let numFiles = (props.numFiles || defaultProps.numFiles)
    let filePrefix = (props.filePrefix || defaultProps.filePrefix)

    let numArray = Array.from(new Array(numFiles), (_x, i) => i + startNum);
    let sceneNames = numArray.map(x => scenesRoot + filePrefix + x + ".glb");
    return sceneNames
};

export { CreateSceneName }