import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import z from "zod"
import { useNavigate } from "react-router-dom"

const registrationSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(25, "Name cannot exceed 25 characters"),
    email: z.string().email(),
    password: z.string().min(8, "Password Cannot be less than 8 characters long"),
    confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords Do Not Match",
    path: ["confirmPassword"]
})


export default function Register() {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setform] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [error, setError] = useState(null)

    function handleChange(e) {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const result = registrationSchema.safeParse(form)
        if (!result.success) {
            setError("Invalid credentials")
            return;
        }
        const user = { name: form.name, email: form.email }
        dispatch({ type: "register", payload: user })
        navigate("/dashboard")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                name="name"
                placeholder='Your Name'
                value={form.name}
                onChange={handleChange} />
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
            <input 
            type="password"
            name='confirmPassword'
            placeholder='Confirm Password'
            value={form.confirmPassword}
            onChange={handleChange} />
            {error && <p> {error} </p>}
            <button type="submit">register</button>
        </form>
    )
}
