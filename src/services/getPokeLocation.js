import axios from "axios";

const getPokeLocation = async (Id) => {
    const URL =  `https://pokeapi.co/api/v2/pokemon/${Id}/encounters`;
    const req = await axios.get(URL)
    return req
}

export default getPokeLocation  