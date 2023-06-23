import axios from 'axios';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks';


if (process.env.NODE_ENV === 'development') {
    // Create a mock server and use the mock handlers
    const server = setupServer(...handlers);
    server.listen(); // Start the mock server
  }
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  // You can add other configuration options here, such as headers
});

export const getListCards = async () => {
  const response = await api.get('/cards');
  return response.data;
};

export const getCardById = async () =>{
  const response = await api.get(`/cards/${id}`)
  return response.data;  
}

export const createCard = async (todo) => {
  const response = await api.post('/cards', todo);
  return response.data;
};

export const updateCard = async (id, todo) => {
  const response = await api.put(`/cards/${id}`, todo);
  return response.data;
};

export const deleteCard = async (id) => {
  const response = await api.delete(`/cards/${id}`);
  return response.data;
};