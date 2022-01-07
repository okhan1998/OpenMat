import React, {useState} from 'react'
import {post} from 'axios'

function Register() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addRegister()
            .then((res) => {
                console.log(res.data);
            })
        setUsernameReg('');
        setPasswordReg('');
    }
    // const addRegister = () => {
    //     const url = '/register';
    //     const formData = new FormData();
    //     formData.append('username', usernameReg);
    //     formData.append('password', passwordReg);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     return post(url, formData, config);
    // }
    const addRegister = () => {
        const url = '/register';
        const data = {usernameReg, passwordReg}

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new user add')
        })
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
