import React from 'react'
import './animalDetail.css'

export const AnimalDetail = ({ name, latin, image, description, home, biotop, food, size, zoo }) => {
    return (
        <div className="detail">
			<div className="detail__content">

				<div className="detail__header">
					<img className="detail__image" src={image} alt="animalImage" />
					<div className="detail__title">
						<h2 className="detail__name"><span>{name}</span></h2>
						<div className="detail__latin"><span>{latin}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						{description}
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>{home}</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>{biotop}</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>{food}</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>{size}</p>
						</div>
					</div>

					<div className="detail__zoo">
						<h3>Najdete je v těchto ZOO</h3>
						<ul>{zoo.map((z) => <li key={z}>{z}</li>)}</ul>
					</div>
				</div>

			</div>
		</div>
    )
};