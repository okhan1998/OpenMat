import React, {useState} from 'react'
import axios from 'axios'

function Register() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = (e) => {
        e.preventDefault()
        axios.post('/register', {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <div>
            <form onSubmit={register}>
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
