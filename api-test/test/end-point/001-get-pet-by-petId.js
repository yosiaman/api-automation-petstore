const expect = require('chai').expect;
const { getPetByPetId } = require('../../api/pet-api.js');
let testData = require('../../data/001-get-pet-by-petId-data.json');

describe('API Check getPetByPetId', () => {
    
    it(`${testData.TC_001.tc_title}`, async function() {
        if (testData.TC_001.is_run) {
            const response = await getPetByPetId(testData.TC_001.pet_id);
            expect(response.status).to.equal(testData.TC_001.tc_validator.http_code);
        } else {
            this.skip();
        }
    })
})