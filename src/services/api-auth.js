import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Записываем токен в заголовок
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищаем заголовок
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Регистрируем пользователя
export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

// Авторизируем пользователя
export const logIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

// Выход из аккаунта
export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

// Информация текущего пользователя
export const refreshUser = async token => {
  setAuthHeader(token);
  const { data } = await axios.get('/users/current');
  return data;
};
