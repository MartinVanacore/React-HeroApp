import { heroes } from "../data/Heroes";

export const GetHeroByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes( publisher ) ) {
        throw new Error (`Error, "${ publisher }" no encontrado. Intente de nuevo por favor.`);
    }
    return heroes.filter( hero => hero.publisher === publisher);

}