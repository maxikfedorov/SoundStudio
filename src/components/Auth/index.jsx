import React from 'react';
export const isAuthenticated = user => !!user;
export const hasRole = (user, roles) => roles.some(role => user.roles.includes(role));

const Auth = () => {

    return (
        <div>

        </div>
    );
};

export default Auth;