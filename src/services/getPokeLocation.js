import axios from "axios";

const getPokeLocation = async (id) => {
    const URL =  `https://pokeapi.co/api/v2/pokemon/${id}/encounters`;
    const req = await axios.get(URL)
    return req
}

export default getPokeLocation  