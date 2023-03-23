import React from 'react'
import { Animal } from './../Animal'

export const AnimalList = ({ animals }) => {
    return (
        <div>
            {animals.map((animal) => 
                <Animal 
                key={animal.id} 
                image={animal.foto} 
                name={animal.nazev} 
                latin={animal.nazevLatinsky}
                />
            )}
        </div>
    )
};



