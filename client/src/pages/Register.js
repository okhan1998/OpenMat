import React, {useState} from 'react'
import {post} from 'axios'

function Register() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addRegister()
        
        setUsernameReg('');
        setPasswordReg('');
    }

    const addRegister = () => {
        const url = '/register';
        const data = {usernameReg, passwordReg}

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <h1>Registration</h1>
            <label>Username</label>
            <input type='text' name='username' value={usernameReg} onChange={(e) => {
                setUsernameReg(e.target.value);
                }}
            />
            <label>Password</label>
            <input type='text' name='password' value={passwordReg} onChange={(e) => {
                setPasswordReg(e.target.value);
            }}
            />
            <button type='sumbit'>Register</button>
            </form>
        </div>
    )
}

export default Register;
