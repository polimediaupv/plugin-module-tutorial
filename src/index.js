
export default function getTutorialPluginContext() {
    return require.context("./plugins", true, /\.js/);
}
