import React, { useState } from 'react';

function LoginForm(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    alert( `Username: ${username}, Password: ${password}`);
}

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"/>

        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"/>

        <button type="submit">Submit</button>
    </form>
    )
}

export default LoginForm;