import { Paella } from '@asicupv/paella-core';

import { ExampleButtonPlugin } from "my-plugin-module";

import "@asicupv/paella-core/paella-core.css";

const player = new Paella('playerContainer', {
    plugins: [
        ExampleButtonPlugin
    ]
});

await player.loadManifest();
