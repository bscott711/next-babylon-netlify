export default function CreateSceneName(e) {
    let numArray = Array.from(new Array(e.numfiles), (_x, i) => i + e.startnum);
    let sceneNames = numArray.map(x => e.root + e.prefix + x + ".glb");
    return sceneNames
};

export { CreateSceneName }