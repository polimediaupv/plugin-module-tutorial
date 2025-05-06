import { Paella } from '@asicupv/paella-core';

import { sayHello, sayGoodbye } from "my-plugin-module";

import "@asicupv/paella-core/paella-core.css";

const player = new Paella('playerContainer');

sayHello();
sayGoodbye();

await player.loadManifest();
