import {React, useState} from "react"
import axios from "axios"


function Singup(){

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Roleid, setRoleid] = useState('')

    const handleSing = async (e) => {
        e.preventDefault()

        const response = await axios.post('http://localhost:3001/usuarios', {nombre, email, password, Roleid})

        if  (response ) {
            localStorage.setItem("token_test", response.data.token)
        }
    }
    
    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSing}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="number" placeholder="Role" value={Roleid} onChange={e => setRoleid(e.target.value)} />

                <button type="submit">Signup</button>
            </form>

            <a href="/login">Login</a>
            <br />
            <a href="/usuarios">Usuarios</a>

        </div>
    )

}

export default Singup