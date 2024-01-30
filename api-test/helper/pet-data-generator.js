const _ = require('lodash');
const { faker } = require('@faker-js/faker');

const petCategory = {
    1: "DOG",
    2: "CAT",
    3: "BIRD",
    4: "FISH",
    5: "REPTILE",
    6: "OTHER"
}

const petStatus = [
    "available",
    "pending",
    "sold",
]

const petTags = {
    1: "cute",
    2: "smart",
    3: "tiny",
    4: "adorable",
    5: "loyal",
    6: "cuddly",
    7: "playful",
    8: "photogenic",
    9: "shy",
    10: "charming",
    11: "exotic",
    12: "obedient",
    13: "domestic",
    14: "fluffy"
}

const getPetStatus = () => petStatus[_.random(petStatus.length - 1)]

const getPetCategory = () => {
    const totalCategory = Object.keys(petStatus).length;
    const randomKey = _.random(1,totalCategory);
    const randomValue = petCategory[randomKey];

    return {
        id: randomKey,
        name: randomValue
    }
}

const getPetTags = () => {
    const totalTags = Object.keys(petTags).length;
    const randomAmountTags = _.random(1,3);
    let tags = []

    for (var i=0; i<randomAmountTags; i++) {
        const randomKey = _.random(1,totalTags);
        const randomValue = petTags[randomKey];

        tags.push({
            id: randomKey,
            name: randomValue
        })
    }
    
    return tags;
}

const getPetId = () =>  _.random(1, 99999);

const getPetName = () => faker.name.firstName();

module.exports = {
    getPetStatus,
    getPetCategory,
    getPetId,
    getPetName,
    getPetTags
}