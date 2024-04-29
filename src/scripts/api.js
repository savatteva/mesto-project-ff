const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
  headers: {
    authorization: 'cb9751e0-e86f-428f-98dc-da113ca08cf1',
    'Content-Type': 'application/json'
  }
}

function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  
  return Promise.reject(`Ошибка: ${res.status}`);
}

const getUserInfo = async () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers, 
  })
    .then(checkStatus)
}

const getInitialCards = async () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkStatus)
}

const addCard = async (name, link, likes) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers, 
    body: JSON.stringify({
      name: name,
      link: link,
      likes: likes
    })
  })
    .then(checkStatus)
}

const submitDeletedCard = async (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers, 
  })
    .then(checkStatus)
}

const submitLikedCard = async (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers, 
  })
    .then(checkStatus)
}

const unlikeCard = async (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers, 
  })
    .then(checkStatus)
}

const editProfile = async (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers, 
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
    .then(checkStatus)
}

const changeAvatar = async (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers, 
    body: JSON.stringify({
      avatar: avatar
    })
  })

    .then(checkStatus)
}

export { config, getUserInfo, getInitialCards, submitDeletedCard, submitLikedCard, unlikeCard, addCard, editProfile, changeAvatar }