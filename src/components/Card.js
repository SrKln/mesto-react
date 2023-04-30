import React from 'react';

function Card({ card, onImageCardClick }) {

    const handleCardClick = () => {
        onImageCardClick(card);
    };

    return (
        <li className="element">
            <img onClick={handleCardClick} className="element__image" src={card.link} alt={card.name} />
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <button className="element__delete" type="button" />
                <div className="element__likes">
                    <button className="element__like" type="button" />
                    <span className="element__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;



