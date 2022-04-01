import { Events, EventLogPlugin } from 'paella-core';

export default class MyTutorialPlugin extends EventLogPlugin {
    get events() {
        return [
            Events.PLAY,
            Events.PAUSE
        ]
    }

    async onEvent(event, params) {
        switch (event) {
        case Events.PLAY:
            console.log("You have pressed the PLAY button");
            break;
        case Events.PAUSE:
            console.log("You have pressed the PAUSE button");
            break;
        }
    }
}
