import React, { useState } from 'react';
import "./style.css";

const RegistrationForm = ({ onRegistration }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            alert('Слышь, заполни !');
            return;
        }
        onRegistration(email, password);
    }

    return (
        <form onSubmit={handleSubmit} className={"form-reg"}>
            <label>
                Email:
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$|^admin$" />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
