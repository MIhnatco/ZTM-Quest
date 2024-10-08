import { enterMapCityInteraction } from './enterMapCity.interactions';

import {interactionWithJessie} from './jessie.interaction';

import { interactionWithGameMachine2 } from './game_machine_2.interactions';
import { interactionWithGameMachine4 } from './game_machine_4.interactions';
import { interactionWithGameMachine6 } from './game_machine_6.interactions';


const interactions = [
    enterMapCityInteraction,
    // Add more interactions here

    interactionWithJessie,


    // new interaction
    interactionWithGameMachine2,

    interactionWithGameMachine4,
    interactionWithGameMachine6,

    interactionWithGameMachine4,
    interactionWithGameMachine6,

];

export const attachInteractions = (gameObj, k) => {
    const map = k.get('main_map')[0];

    interactions.forEach((cb) => cb(gameObj, k, map));
};
