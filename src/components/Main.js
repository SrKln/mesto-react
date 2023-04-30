import React from 'react';
import Card from './Card.js';
import api from '../utils/api.js'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userSubtitle, setUserSubtitle] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name);
                setUserSubtitle(res.about);
                setUserAvatar(res.avatar);
            })
            .then(() => {
                api.getInitialCards()
                    .then(res => setCards(res))
            })
            .catch(err => console.log(err));
    }, []);



    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar} />
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__edit-button" name="button" onClick={props.onEditProfile} />
                    <p className="profile__subtitle">{userSubtitle}</p>
                </div>
                <button type="button" name="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>
            <section className="elements" aria-label="Блок с карточками">
                <ul className="elements__grid" >   {cards.map((card) =>
                    <Card onImageCardClick={props.onCardClick} key={card._id} card={card} />
                )}</ul>
            </section>
        </main>
    );
}

export default Main;
