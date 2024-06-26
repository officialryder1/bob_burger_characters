import { error } from "@sveltejs/kit";

type DetailedCharacter = {
    id: number;
    name: string;
    image: string;
    gender: string;
    hairColor: string;
    occupation: string;
    firstEpisode: string;
    voicedBy: string;
    url: string;
    wikiUrl: string;
    relatives: {name:string}[];

}
import type { Load } from "@sveltejs/kit";

const api = "https://svelte.fun/api/bobs-burgers/";

export const load: Load = async ({fetch, params}) =>{
    const {id} = params
    const response = await fetch(`${api}/characters/${id}`);

    // check if response is okay
    if(!response.ok){
        const err = await response.json()
        throw error(response.status, err.message)
    }
    const character: DetailedCharacter = await response.json();
    return{
        character
    }
}

