import { renderLoading, formNewPlace, formEditProfile, changeAvatarForm } from './forms.js'

const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
  headers: {
    authorization: 'cb9751e0-e86f-428f-98dc-da113ca08cf1',
    'Content-Type': 'application/json'
  }
}

const getUserInfo = async () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers, 
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  
    .catch((err) => {
      console.log(err); 
    })
}

const getInitialCards = async () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })
}

const addNewCardUsingApi = async (name, link, likes) => {
  renderLoading(true, formNewPlace.querySelector('.popup__button'));

  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers, 
    body: JSON.stringify({
      name: name,
      link: link,
      likes: likes
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })

    .finally(() => renderLoading(false, formNewPlace.querySelector('.popup__button')))
}

const deleteCardUsingApi = async (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers, 
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })

    .finally(() => renderLoading(false, formNewPlace.querySelector('.popup__button')))
}

const likeCardUsingApi = async (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers, 
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })
}

const unlikeCardUsingApi = async (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers, 
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })
}

const editProfile = async (name, about) => {
  renderLoading(true, formEditProfile.querySelector('.popup__button'));

  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers, 
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })

    .finally(() => renderLoading(false, formEditProfile.querySelector('.popup__button')))
}

const changeAvatarUsingApi = async (avatar) => {
  renderLoading(true, changeAvatarForm.querySelector('.popup__button'))

  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers, 
    body: JSON.stringify({
      avatar: avatar
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
      console.log(err); 
    })

    .finally(() => renderLoading(false, changeAvatarForm.querySelector('.popup__button')))
}

const renderApiLoading = async () => {
  
}

export { config, getUserInfo, getInitialCards, deleteCardUsingApi, likeCardUsingApi, unlikeCardUsingApi, addNewCardUsingApi, editProfile, changeAvatarUsingApi }