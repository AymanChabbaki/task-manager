import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import z, { email } from "zod"
import { useNavigate } from "react-router-dom"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export default function Login() {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setform] = useState({ email: "", password: "" })
    const [error, setError] = useState(null)

    function handleChange(e) {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const result = loginSchema.safeParse(form)
        if (!result.success) {
            setError("Invalid credentials")
            return;
        }
        const user = { email: form.email }
        dispatch({ type: "login", payload: user })
        navigate("/dashboard")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='email'
                type="email"
                placeholder='Example@email.com'
                value={form.email}
                onChange={handleChange} />
            <input
                type="password"
                name='password'
                placeholder='PassWord'
                value={form.password}
                onChange={handleChange} />
                {error && <p> {error} </p>}
            <button type="submit">Login</button>
        </form>
    )
}
