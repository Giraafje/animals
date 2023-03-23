import React from 'react'
import './animal.css'

export const Animal = ({ image, name, latin }) => {
    return (
        <div className="animal">
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
