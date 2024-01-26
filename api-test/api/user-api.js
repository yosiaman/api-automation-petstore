const supertest = require('supertest');
const env = require('dotenv').config();
const request = supertest(process.env.BASE_URL);


const createNewUser = (requestBody) => request.post(`/user`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const updateUser = (requestBody, userName) => request.put(`/user/${userName}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const getUserByUserName = (userName) => request.get(`/user/${userName}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const deleteUserByUserName = (userName) => request.delete(`/user/${userName}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const createUserWithArray = (requestBody) => request.post(`/user/createWithArray`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const createUserWithList = (requestBody) => request.post(`/user/createWithList`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const userLogin = (userName, password) => request.get(`/user/login`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .query({username: userName, password: password});

const userLogout = () => request.get(`/user/logout`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');


module.exports = {
    createNewUser,
    updateUser,
    getUserByUserName,
    deleteUserByUserName,
    createUserWithArray,
    createUserWithList,
    userLogin,
    userLogout
}