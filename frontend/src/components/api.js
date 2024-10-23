import axios from 'axios';
const API_URL = 'http://localhost:8080/tasks';

export const createTask = async (task) => {
    return await axios.post(API_URL, task);
};

export const getTasks = async () => {
    return await axios.get(API_URL);
};

export const getTask = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const deleteTask = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};