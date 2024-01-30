const expect = require('chai').expect;
const { addNewPet, getPetByPetId } = require('../../api/pet-api');
let testData = require('../../data/003-add-new-pet-data.json');
const { getPetStatus, getPetCategory, getPetId, getPetName,
    getPetTags } = require('../../helper/pet-data-generator.js');

describe('API Check addNewPet', () => {
    // describe data
    let postRequest = {};

    it(`${testData.TC_001.tc_title}`, async function() {
        if (testData.TC_001.is_run) {
            // compose request body
            testData.TC_001.tc_request_body.id = getPetId();
            testData.TC_001.tc_request_body.name = getPetName();
            testData.TC_001.tc_request_body.status = getPetStatus();
            testData.TC_001.tc_request_body.category = getPetCategory();
            testData.TC_001.tc_request_body.tags = getPetTags();

            // request
            const response = await addNewPet(testData.TC_001.tc_request_body);

            // response checking
            expect(response.status).to.equal(testData.TC_001.tc_validator.http_code);

            // bring to describe data
            postRequest = testData.TC_001.tc_request_body;
        } else {
            this.skip();
        }
    })

    afterEach(async function() {
        // check the data integrity between post and get pet api
        const response = await getPetByPetId(postRequest.id);
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(postRequest.id);
        expect(response.body.name).to.equal(postRequest.name);
        expect(response.body.status).to.equal(postRequest.status);
        expect(response.body.category.id).to.equal(postRequest.category.id);
        expect(response.body.category.name).to.equal(postRequest.category.name)
        for (var i=0; i<postRequest.tags.length; i++) {
            expect(response.body.tags[i].id).to.equal(postRequest.tags[i].id);
            expect(response.body.tags[i].name).to.equal(postRequest.tags[i].name);
        }

        // reset used describe data
        postRequest = {};
    })
})