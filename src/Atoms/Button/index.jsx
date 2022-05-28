import React from 'react';
import { ButtonDefault } from './styles.js';

const Button = ( { type, value, onClick } ) => {
    return (
        <ButtonDefault 
            type={type}
            onClick={onClick}
        >
            {value}
        </ButtonDefault>
    )    
}

export { Button }