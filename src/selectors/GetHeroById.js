import { heroes } from "../data/Heroes";

export const GetHeroById = ( id ) => {

   
    return heroes.find( hero => hero.id === id);

}