import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const img = 'https://i.pinimg.com/originals/83/fc/fa/83fcfab8b05355370ff1e65d6d658e64.png'

    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerOnClick = () => {
        dispatch({
            type: "@user/login",
            payload :userName
        })
        navigate('/pokedex')
    }

    return (
        <div>
            <h2 className="trainer">Hello trainer!</h2>
            <img className="img" src={img} alt=''/>
            <div className="login">
            <input placeholder="Enter your name to start" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handlerOnClick}>Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default Login