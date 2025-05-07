import { PluginModule } from "@asicupv/paella-core";
import packageData from "../package.json";

let g_pluginModule = null;

export default class ExamplePluginsModule extends PluginModule {
    static Get() {
        if (!g_pluginModule) {
            g_pluginModule = new ExamplePluginsModule();
        }
        return g_pluginModule;
    }

    get moduleName() {
        return "example-plugin-module";
    }

    get moduleVersion() {
        return packageData.version;
    }
}
