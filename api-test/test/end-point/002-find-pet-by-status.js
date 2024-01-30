const expect = require('chai').expect;
const { findPetByStatus } = require('../../api/pet-api.js');
let testData = require('../../data/002-find-pet-by-status-data.json');

describe('API Check findPetByStatus', () => {

    it(`${testData.TC_001.tc_title}`, async function() {
        if (testData.TC_001.is_run) {
            const response = await findPetByStatus(testData.TC_001.query_param);
            expect(response.status).to.equal(testData.TC_001.tc_validator.http_code)
        } else {
            this.skip();
        }
    })

    it(`${testData.TC_002.tc_title}`, async function() {
        if (testData.TC_002.is_run) {
            const response = await findPetByStatus(testData.TC_002.query_param);
            expect(response.status).to.equal(testData.TC_002.tc_validator.http_code)
        } else {
            this.skip();
        }
    })

    it(`${testData.TC_003.tc_title}`, async function() {
        if (testData.TC_003.is_run) {
            const response = await findPetByStatus(testData.TC_003.query_param);
            expect(response.status).to.equal(testData.TC_003.tc_validator.http_code)
        } else {
            this.skip();
        }
    })
})