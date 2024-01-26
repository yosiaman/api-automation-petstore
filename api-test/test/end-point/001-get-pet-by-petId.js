const expect = require('chai').expect;
const { getPetByPetId } = require('../../api/pet-api.js');
const testData = require('../../data/get-pet-by-petId-data.json');

describe('API Check getPetByPetId', () => {
    it(`${testData.tc_001.tc_title}`, async () => {
        const response = await getPetByPetId(testData.tc_001.pet_id);
        console.log(response.body);
        expect(response.status).to.equal(testData.tc_001.tc_validator.http_code);
    })
})