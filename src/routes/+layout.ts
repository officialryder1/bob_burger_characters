type Character = {
    id: number;
    name: string;
    image: string;
    occupation: string;
}

const api = "https://svelte.fun/api/bobs-burgers/";

export const load = async () =>{
    const response = await fetch(`${api}/characters`);
    const characters: Character[] = await response.json()
    return{
        characters
    }
}

