import { memo, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = memo(({ card, onCardClick, onCardLike, onCardDelete }) => {
    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `element__like ${isLiked && 'element__like_active'}`
    );

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="element">
            <img onClick={handleClick} className="element__image" src={card.link} alt={card.name} />
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                {isOwn && <button className="element__delete" onClick={handleDeleteClick} type="button" />}
                <div className="element__likes">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" />
                    <span className="element__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
});

export default Card;



