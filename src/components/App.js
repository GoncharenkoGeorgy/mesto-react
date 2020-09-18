import React, { useState } from 'react';
import { Header } from './Header.js';
import Main from './Main.js';
import { Footer } from './Footer.js';
import PopupWithForm from './PopupWithFrom.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: '',
    });
  }

  function handleCardClick(cardData) {
    const { link, name } = cardData.card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        handleCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        submit='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor='name' className='popup__fields'>
          <input
            type='text'
            className='popup__input'
            id='name-input'
            name='userName'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='popup__input-error' id='name-input-error'></span>
        </label>
        <label htmlFor='about' className='popup__fields'>
          <input
            type='text'
            className='popup__input'
            id='prof-input'
            name='userProf'
            placeholder='Род деятельности'
            minLength='2'
            maxLength='200'
            required
          />
          <span className='popup__input-error' id='prof-input-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='place'
        title='Новое место'
        submit='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor='name' className='popup__fields'>
          <input
            className='popup__input'
            id='text-input'
            name='name'
            placeholder='Название'
            minLength='1'
            maxLength='30'
            required
          />
          <span className='popup__input-error' id='text-input-error'></span>
        </label>
        <label htmlFor='link' className='popup__fields'>
          <input
            type='url'
            className='popup__input'
            id='url-input'
            name='link'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='popup__input-error' id='url-input-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        submit='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor='url' className='popup__fields'>
          <input
            type='url'
            className='popup__input'
            id='url-input'
            name='link'
            placeholder='Ссылка на аватар'
            required
          />
          <span className='popup__input-error' id='url-input-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name='delete'
        title='Вы уверены?'
        submit='Да'
        onClose={closeAllPopups}
      >
      </PopupWithForm>

      <ImagePopup
        name={selectedCard.name}
        link={selectedCard.link}
        onClose={closeAllPopups}
        isOpen={selectedCard.isImageOpen}
      ></ImagePopup>
    </div>
  );
}

export default App;
