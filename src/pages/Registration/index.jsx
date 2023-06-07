import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {hasRole, isAuthenticated} from "../../components/Auth/index";
import RegistrationForm from "../../components/Auth/RegistrationForm";


const Reg = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleRegistration = (email, password) => {
        let roles = ['user']; // по умолчанию роль пользователя 'user'
        if (email === 'admin' && password === 'admin') {
            roles = ['admin']; // если email и password равны 'admin', то роль пользователя 'admin'
        }
        else if (email === 'admin' && password !== 'admin'){
            alert('Неправильный пароль Админа'); // если email равен 'admin', но password не равен 'admin', вывести сообщение "неправильный пароль" на экран
            return;
        }
        const newUser = { email, password, roles };
        setUser(newUser);
    }

    if (isAuthenticated(user)) {
        if (hasRole(user, ['admin'])) {
            return navigate("/");
        } else {
            return navigate("/");
        }
    }

    return (
        <div className={"div-home"}>
            <h1 className={"banner"}>SOUND - STUDIO</h1>
            <RegistrationForm onRegistration={handleRegistration} />
        </div>
    );
};

export default Reg;