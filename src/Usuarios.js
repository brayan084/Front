import React, { useState, useEffect } from "react";
import axios from "axios";

function Usuarios() {
    const token = localStorage.getItem("token_test");
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/usuarios', { headers: { Authorization: `Bearer ${token}` }})
            .then((r) => {
                setUsuarios(r.data.usuarios);
                console.log(r.data.usuarios);
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <h2>Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usuarios