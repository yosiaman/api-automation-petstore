const supertest = require('supertest');
const env = require('dotenv').config();
const request = supertest(process.env.BASE_URL);


const getPetByPetId = (petId) => request.get(`/pet/${petId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

const addNewPet = (requestBody) => request.post(`/pet`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const uploadPetImage = (petId, formData) => request.post(`/pet/${petId}/uploadImage`)
    .set('Content-Type', 'multipart/form-data')
    .set('accept', 'application/json')
    .attach(Object.keys(formData)[1], formData[Object.keys(formData)[1]]);

const updatePet = (requestBody) => request.put(`/pet`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

const updatePetPartial = (petId, requestBody) => request.post(`/pet/${petId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(requestBody);

/* 
[PET STATUS]
- available
- pending
- sold
*/
const findPetByStatus = (petStatus) => request.get(`/pet/findByStatus`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .query(petStatus);

const deletePetByPetId = (petId) => request.delete(`/pet/${petId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');


module.exports = {
    getPetByPetId,
    findPetByStatus,
    addNewPet,
    updatePet,
    updatePetPartial,
    uploadPetImage,
    deletePetByPetId
}