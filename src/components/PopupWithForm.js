import React from 'react';

function PopupWithForm(props) {
      return (
            <div className={`popup popup_type_${props.name}  ${props.isOpen && 'popup_opened'}`} onMouseDown={props.onOverlayClose}>
                  <div className="popup__container">
                        <button className="popup__close-button " type="button" onClick={props.onButtonClose} />
                        <h3 className="popup__header">{props.title}</h3>
                        <form className="popup__info popup__info_edit-profile" name={`${props.name}`} noValidate>
                              {props.children}
                              <button className="popup__button" type="submit" name="button">
                                    {props.buttonText}
                              </button>
                        </form>
                  </div>
            </div>
      );
}

export default PopupWithForm;

