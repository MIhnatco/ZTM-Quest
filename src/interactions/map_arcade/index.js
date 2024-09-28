import { enterMapCityInteraction } from './enterMapCity.interactions';

const interactions = [enterMapCityInteraction];

export const attachInteractions = (gameObj, k) => {
    const map = k.get('main_map')[0];

    interactions.forEach((cb) => cb(gameObj, k, map));
};
