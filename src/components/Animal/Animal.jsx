import React from 'react'
import './animal.css'

export const Animal = ({ image, name, latin, onSelected}) => {
    
    const handleClick = () => {
        onSelected(name)
        console.log(name)
    }

    return (
        <div className="animal" onClick={handleClick}>
            <div className="animal__image">
                <img src={image} alt="slon" />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{name}</div>
                <div className="animal__latin">{latin}</div>
            </div>
		</div>
    )
};
