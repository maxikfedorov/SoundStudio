    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.scss';
    import App from './App';
    import {BrowserRouter} from "react-router-dom";


    /**
     * Функция для создания корневого элемента приложения с использованием React.createRoot()
     * и отрисовки нашего компонента <App />.
     * @function
     * @name render
     */
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

            <BrowserRouter>
                <App/>
            </BrowserRouter>

    );


