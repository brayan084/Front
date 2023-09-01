import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                email,
                password,
            });

            const token = response.data.token;
            localStorage.setItem("token_test", token);
            navigate("/usuarios");


        } catch (error) {
            console.log("Error en login", error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>

                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Login</button>

            </form>

            <a href="/signup">Singup</a>
            <br />
            <a href="/usuarios">Usuarios</a>
        </div>
        
    )
}

export default Login