import { useEffect, useState } from "react"
import { useNavigate, useParams, } from "react-router-dom"
import getPokeLocation from "../../services/getPokeLocation"
import styles from './PokeCounter.module.css'


const PokeCounter = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [getName, setGetName] = useState('')


  
  /*  useEffect(() => {
        getPokeLocation(id)
          .then((res) => {
            console.log(id)
            setGetName(res.data.name)
        

          })

    },[]) */


    return(
        <div className={styles.pokeget} >
            <div>djkfkdkjdf</div>
            <div>name: {getName}</div>
            <button onClick={() => navigate(-1)}>Atras</button>
        </div>

    )
}

export default PokeCounter 