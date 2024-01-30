const expect = require('chai').expect;
const { addNewPet } = require('../../api/pet-api');
let testData = require('../../data/003-add-new-pet-data.json');
const { getPetStatus, getPetCategory, getPetId, getPetName,
    getPetTags } = require('../../helper/pet-data-generator.js')

describe('API Check addNewPet', () => {

    it(`${testData.TC_001.tc_title}`, async function() {
        if (testData.TC_001.is_run) {
            // compose request body
            testData.TC_001.tc_request_body.id = getPetId();
            testData.TC_001.tc_request_body.name = getPetName();
            testData.TC_001.tc_request_body.status = getPetStatus();
            testData.TC_001.tc_request_body.category = getPetCategory();
            testData.TC_001.tc_request_body.tags = getPetTags();

            // request and check
            const response = await addNewPet(testData.TC_001.tc_request_body);
            expect(response.status).to.equal(testData.TC_001.tc_validator.http_code);
        } else {
            this.skip();
        }
    })
})