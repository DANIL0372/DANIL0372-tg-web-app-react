import React from 'react';

const Button = (props) => {
    return (
        <button {...porps} className={'button' + porps.className}/>
    );
};

export default Button;