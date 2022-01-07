import React, {useState} from 'react'


function Login() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [loginStatus, setLoginStatus] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        tryLogin();
        setUsernameReg('');
        setPasswordReg('');
    }

    const tryLogin = () => {
        const url = '/login';
        const data = {usernameReg, passwordReg}

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            if(data.message === 'Wrong username/password combination!')
            setLoginStatus(data.message)
            else
            setLoginStatus(data[0].username)
            console.log(data)})
        .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
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
            <button type='sumbit'>login</button>
            </form>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Login
