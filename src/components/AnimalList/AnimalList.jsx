import React from 'react'
import { Animal } from './../Animal'

export const AnimalList = ({ animals, onSelected }) => {  
    return (
        <div>
            {animals.map((animal) => 
                <Animal 
                key={animal.id} 
                image={animal.foto} 
                name={animal.nazev} 
                latin={animal.nazevLatinsky}
                onSelected={onSelected}
                />
            )}
        </div>
    )
};



