const { expect } = require('chai');
const testData = require('../../data/004-upload-pet-image-data.json');
const testData2 = require('../../data/003-add-new-pet-data.json');
const { uploadPetImage, addNewPet, getPetByPetId } = require('../../api/pet-api.js');
const { getPetId, getPetTags, getPetName, getPetCategory, getPetStatus } = require('../../helper/pet-data-generator.js');

// this is used for .field() in supertest
// const formData = {
//     additionalMetadata: 'testing by yosiaman',
//     file: JSON.stringify({
//         value: require('fs').createReadStream('/Users/cashbac/Downloads/experiment#02.jpg'),
//         options: {
//             filename: 'experiment#02.jpg',
//             type: 'image/jpeg',
//         },
//     }),
// };

const formData = {
    fileName : 'experiment#02.jpg',
    file: `/Users/cashbac/Downloads/experiment#02.jpg`
}

describe('API Check uploadPetImage', () => {
    // describe data
    let createPetRequest = {};

    beforeEach(async function() {
        // compose request body
        let tc_request_body = testData2.TC_001.tc_request_body;
        const tc_validator = testData2.TC_001.tc_validator;
        tc_request_body.id = getPetId();
        tc_request_body.name = getPetName();
        tc_request_body.status = getPetStatus();
        tc_request_body.category = getPetCategory();
        tc_request_body.tags = getPetTags();

        // create pet & quick check
        const response = await addNewPet(tc_request_body);
        expect(response.status).to.equal(tc_validator.http_code);
        expect(response.body.id).to.equal(tc_request_body.id);

        // bring to describe data
        createPetRequest = tc_request_body;
    })

    it(`${testData.TC_001.tc_title}`, async function() {
        const tc_validator = testData.TC_001.tc_validator;
        if (testData.TC_001.is_run) {
            const response = await uploadPetImage(testData.TC_001.pet_id, formData);
            expect(response.status).to.equal(testData.TC_001.tc_validator.http_code);
            expect(response.body.code).to.equal(testData.TC_001.tc_validator.http_code);
            expect(response.body.message).to.include(formData.fileName);
            expect(response.body).to.have.keys(tc_validator.parent_keys);
            expect(response.body.code).to.be.an(tc_validator.code_type);
            expect(response.body.type).to.be.an(tc_validator.type_type);
            expect(response.body.message).to.be.an(tc_validator.message_type);
        } else {
            this.skip();
        }
    })

    afterEach(async function() {
        // reset used describe data
        createPetRequest = {};
    })
})