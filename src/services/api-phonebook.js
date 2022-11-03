import axios from 'axios';

axios.defaults.baseURL = 'https://635d118ffc2595be265229d9.mockapi.io/api';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
