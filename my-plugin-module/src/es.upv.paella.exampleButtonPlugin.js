import {
    ButtonPlugin
} from '@asicupv/paella-core';
import ExamplePluginModule from "./ExamplePluginModule";

const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2" style="fill: none;">
  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
  <path d="M12 8v3"></path>
  <path d="M12 14v.01"></path>
</svg>`;

export default class ExampleButtonPlugin extends ButtonPlugin {
    getPluginModuleInstance() {
        return ExamplePluginModule.Get();
    }

    get name() {
        return "es.upv.paella.exampleButtonPlugin";
    }

    async load() {
        this.icon = icon;
    }

    async action() {
        alert("Hello from the example button plugin!");
    }
}
