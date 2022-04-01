import { PluginModule } from 'paella-core';
import packageData from '../../package.json';

export default class TutorialPlugins extends PluginModule {
    get moduleName() {
        return 'tutorial-plugins';
    }

    get moduleVersion() {
        return packageData.version;
    }
}
