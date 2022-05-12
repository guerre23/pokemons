import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import getPokemonById from "../services/getPokemonById"
import './Pokemon.css'

const Pokemon = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [getImg, setGetIdImg] = useState('')
    const [pokeName, setPokeName] = useState('')
    const [abilities, setAbilities] = useState(2,0)
    const [slotAbilities, setSlotAbilities] = useState(2,0,1)
    const [heightArr, setHeightArr] = useState([])
    const [weightArr, setWeightArr] = useState([])
    const [getId, setGetId] = useState()
    const [getType, setGetType] = useState()
 
    const [moves, setMoves] = useState([83,0])
    


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

                setMoves(res.data.moves[83,0].move.name)            
            })
    }, [id])

    return(
        <div className="card">

            <div>
              <h6># {getId} </h6>
              <h2>{pokeName}</h2>
              <div>
                <img 
                  src={getImg} 
                  alt="pokemon.name"               
                  />
              </div>
            </div>

            <h2>abilities: {abilities} {slotAbilities}</h2>
            <h5>height: {heightArr} </h5>
            <h5>weight: {weightArr}</h5>

            {moves} 
            <div>{getType}</div>                  

            <br/>
            <button onClick={() => navigate(-1)}>Atras</button>
            <br />
            <Link to={`/pokedex/${id}/encounters`}>Encouters</Link>
        </div>
    )
}

export default Pokemon