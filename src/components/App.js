import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPopupPictureOpen, setIsPopupPictureOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState([]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsPopupPictureOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupPictureOpen(false);
  };

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isPopupPictureOpen;


  React.useEffect(() => {
    function closeAllPopupsByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeAllPopupsByEscape);
      return () => { document.removeEventListener('keydown', closeAllPopupsByEscape); }
    }
  }, [isOpen]);

  const closeAllPopupsByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups()
    }
  };

  return (

    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={'profile'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onButtonClose={closeAllPopups}
        onOverlayClose={closeAllPopupsByOverlay}
        buttonText={'Сохранить'}
      >
        <input type="text" className="popup__input popup__input_profile_title" id="profile-title-input" name="name" placeholder="Введите Имя" minLength={2} maxLength={40} required />


        <span className="popup__input-error profile-title-input-error" />
        <input type="text" className="popup__input popup__input_profile_subtitle" id="profile-subtitle-input" name="about" placeholder="Добавьте пояснение" minLength={2} maxLength={200} required />
        <span className="popup__input-error profile-subtitle-input-error" />

      </PopupWithForm>

      <PopupWithForm
        name={'add-element'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onButtonClose={closeAllPopups}
        onOverlayClose={closeAllPopupsByOverlay}
        buttonText={'Создать'}
      >
        <input type="text" className="popup__input popup__input_element-title" id="element-title-input" name="name" placeholder="Название" minLength={2} maxLength={30} required />
        <span className="popup__input-error element-title-input-error" />
        <input type="url" className="popup__input popup__input_element-image" id="element-image-input" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error element-image-input-error" />

      </PopupWithForm>

      <PopupWithForm
        name={'edit-avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onButtonClose={closeAllPopups}
        onOverlayClose={closeAllPopupsByOverlay}
        buttonText={'Сохранить'}
      >
        <input className="popup__input popup__input_avatar" id="popup__input-error_avatar" name="avatar" type="url" placeholder="Ссылка на аватар" required />
        <span className="popup__input-error popup__input-error_avatar-error" />

      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isPopupPictureOpen}
        onButtonClose={closeAllPopups}
        onOverlayClose={closeAllPopupsByOverlay}
      />



    </div>

  );
}

export default App;
