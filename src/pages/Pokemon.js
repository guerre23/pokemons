import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import PokeMove from "../components/PokeMove"
import getPokemonById from "../services/getPokemonById"
import styles from './Pokemon.module.css'

const Pokemon = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [getImg, setGetIdImg] = useState('')
    const [pokeName, setPokeName] = useState('')
    const [abilities, setAbilities] = useState([2,0])
    const [slotAbilities, setSlotAbilities] = useState([2,0,1])
    const [heightArr, setHeightArr] = useState([])
    const [weightArr, setWeightArr] = useState([])
    const [getId, setGetId] = useState()
    const [getType, setGetType] = useState()
 
    const [getMoves, setGetMoves] = useState()
    


    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
                console.log(res.data)
                setGetIdImg(res.data.sprites.front_default)
                setPokeName(res.data.name)
                setAbilities(res.data.abilities[2,0].ability.name) 
                setSlotAbilities(res.data.abilities[2,0,1].ability.name)               
                setHeightArr(res.data.height)
                setWeightArr(res.data.weight)
                setGetId(res.data.id)
                setGetType(res.data.types.type.name)
               setGetMoves(res.data.move)
            })
    }, [id])

    return(
        <div>
            <button onClick={() => navigate(-1)}>Atras</button>
            <div className={styles.card}>
              <h6 className={styles.number}># {getId} </h6>
              <h4>{pokeName}</h4>
              <h6>abilities: {abilities} {slotAbilities}</h6>
                <h5>height: {heightArr} </h5>
                <h5>weight: {weightArr}</h5>           
                <img 
                  className={styles.imgpokemon}
                  src={getImg} 
                  alt="pokemon.name"               
                  />             
            </div>          
            <div>{getType}</div>
            <br />
            <Link to={`/pokedex/${id}/encounters`} >encounters</Link>
        </div>
    )
}

export default Pokemon