/**

 Компонент для роутинга между страницами
 @component
 */
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home";
import Favorites from "../../pages/favorites";
import Auth from "../Auth";
import RegistrationForm from "../Auth/RegistrationForm";
import Registration from "../../pages/Registration";
/**

 @typedef {Object} NavigationProps
 */
/**

 Функциональный компонент для навигации между страницами

 @param {NavigationProps} props - пропсы компонента

 @returns {JSX.Element}
 */
function Navigation({}) {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/auth" element={<Registration/>}/>
        </Routes>
    );
}

export default Navigation;