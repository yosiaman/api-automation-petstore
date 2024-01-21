const supertest = require('supertest');
const env = require('dotenv').config();
const request = supertest(process.env.BASE_URL);

const getPetByPetId = (petId) => request.get(`/pet/${petId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

module.exports = {
    getPetByPetId
}