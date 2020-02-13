import React, { useEffect, useState } from 'react'
import api from '../../service/api'

function Login() {
    const [token, setToken] = useState('')

    useEffect(() => {
        async function getToken() {
            const response = await api.post('/login', {
                email: "cleyton_Rodrigues@gmail.com",
                password: "anya1_@A"
            })
            setToken(response.data.token)
        }

        getToken()
    }, [])

    return (
        <p>Seu token: {token}</p>
    )
}

export default Login