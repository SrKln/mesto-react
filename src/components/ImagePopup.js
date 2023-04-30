function ImagePopup(props) {
    const card = props.card;
    return (
        <div className={`popup popup_open-image ${card ? "popup_opened" : ""}`}>
            <div className="popup__image-container">
                <img className="popup__image" src={card.link} alt={card.name} />
                <p className="popup__image-text">{card.name}</p>
                <button className="popup__close-button popup__close-button_image " onClick={props.onButtonClose} type="button" />
            </div>
        </div>
    );
}

export default ImagePopup;