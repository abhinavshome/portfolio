import {latest, paintings} from "../data/data.json";


export const getPaintings = () => {
    return Promise.resolve(paintings);
};

export const getLatestPaintings = () => {
    return Promise.resolve(paintings.filter(p => latest.contains(p.id)));
}