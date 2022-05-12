import { useEffect, useState } from "react"
import { useNavigate, } from "react-router-dom"
import getPokeLocation from "../../services/getPokeLocation"
import './PokeCounter.css'


const PokeCounter = ({Id}) => {

    const navigate = useNavigate()
    const [getName, setGetName] = useState('')


  
    useEffect(() => {
        getPokeLocation(Id)
          .then((res) => {
            console.log(res.data)
            setGetName(res.data.name)
        

          })

    },[]) 


    return(
        <div>
            <div>name: {getName}</div>
            <button onClick={() => navigate(-1)}>Atras</button>
        </div>

    )
}

export default PokeCounter 