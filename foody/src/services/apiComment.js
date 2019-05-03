import axios from 'axios';

const BASE_URL = 'http://localhost:3000/comments';

const getAllMenuItems = (name) => axios.get(BASE_URL).then(response => response.data).then(data => data.filter(item => item.dish === name));

// const getById = id => axios.get(`${BASE_URL}/${id}`).then(response => response.data);

// const delById = id => axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addItem = item => axios.post(BASE_URL, item).then(response => response.data);

export {getAllMenuItems, addItem};
