import { useEffect, useState } from "react"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./PokeType"
import { Link } from 'react-router-dom'
import './PokeItem.css'

const PokeItem = ({url}) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] = useState([])
    const [hp, setHp] = useState(0)
    const [pokeId, setPokeId] = useState(null)
    const [attack, setAttack] = useState (0)
    const [defense, setDefense] = useState(2)
    const [speed, setSpeed] = useState(5)
    
    useEffect(() => {
        getInfoByUrl(url)
            .then((res) =>{ 
            setPokeObj(res.data)
            setPokeImg(res.data.sprites.base_default)
            setTypesArr(res.data.types)
            setHp(res.data.stats[0].base_stat)
            setPokeId(res.data.id)
            setAttack(res.data.stats[1].base_stat)
            setDefense(res.data.stats[2].base_stat)
            setSpeed(res.data.stats[5].base_stat)
                       
        })
    }, [url])

    return(
        <Link to={`/pokedex/${pokeId}`}>
            <div className="stylepok">
                <img src={pokeImg} alt='' /> 
                <h1>{pokeObj.name}</h1>
                {typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}
                <h2>Hp: {hp}</h2>
                <h3>attack: {attack}</h3>
                <h4>defense: {defense}</h4>
                <h5>speed: {speed}</h5>               
            </div>
        </Link>
    )
}

export default PokeItem