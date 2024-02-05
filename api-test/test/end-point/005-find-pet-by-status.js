const { expect } = require('chai');
const testData = require('../../data/005-find-pet-by-status-data.json');
const { findPetByStatus } = require('../../api/pet-api.js');
const { getPetStatus } = require('../../helper/pet-data-generator.js');

describe('API Check findPetByStatus', () => {

    it(`${testData.TC_001.tc_title}`, async function() {        
        if (testData.TC_001.is_run) {
            const tc_validator = testData.TC_001.tc_validator;
            const query_param = testData.TC_001.query_param;
            query_param.status = getPetStatus();

            // api hit
            const response = await findPetByStatus(query_param);

            // response checking
            expect(response.status).to.equal(tc_validator.http_code);
            if (response.body.length > 1) {
                // check the first & last item as representation
                const repResponse = [
                    response.body[0],
                    response.body.slice(-1)[0]
                ]
                for (const item of repResponse) {
                    expect(item.status).to.equal(query_param.status);
                    expect(item).to.have.keys(tc_validator.parent_keys);
                    expect(item.category).to.be.an(tc_validator.category_type);
                    expect(item.tags).to.be.an(tc_validator.tags_type);
                    expect(item.photoUrls).to.be.an(tc_validator.photoUrls_type);
                    expect(item.id).to.be.an(tc_validator.id_type);
                    expect(item.name).to.be.an(tc_validator.name_type);
                    expect(item.status).to.be.an(tc_validator.status_type);
                    expect(item.category.id).to.be.an(tc_validator.id_type);
                    expect(item.category.name).to.be.an(tc_validator.name_type);
                    for (var i=0; i<item.tags.length; i++) {
                        expect(item.tags[i].id).to.be.an(tc_validator.id_type);
                        expect(item.tags[i].name).to.be.an(tc_validator.name_type);
                    }
                }
            } else {
                expect(response.body[0].status).to.equal(query_param.status);
                expect(response.body[0]).to.have.keys(tc_validator.parent_keys);
                expect(response.body[0].category).to.be.an(tc_validator.category_type);
                expect(response.body[0].tags).to.be.an(tc_validator.tags_type);
                expect(response.body[0].photoUrls).to.be.an(tc_validator.photoUrls_type);
                expect(response.body[0].id).to.be.an(tc_validator.id_type);
                expect(response.body[0].name).to.be.an(tc_validator.name_type);
                expect(response.body[0].status).to.be.an(tc_validator.status_type);
                expect(response.body[0].category.id).to.be.an(tc_validator.id_type);
                expect(response.body[0].category.name).to.be.an(tc_validator.name_type);
                for (var i=0; i<response.body[0].tags.length; i++) {
                    expect(response.body[0].tags[i].id).to.be.an(tc_validator.id_type);
                    expect(response.body[0].tags[i].name).to.be.an(tc_validator.name_type);
                }
            }
        } else {
            this.skip();
        }
    })
})