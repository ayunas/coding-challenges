const { expect } = require('@jest/globals');
const countMatchHouses = require('../matchHouses');

describe("matchHouses", () => {

    test("1 house => 6", () => {
        expect(countMatchHouses(1)).toBe(6);
    });

    test("2 houses => 11", () => {
        expect(countMatchHouses(2)).toBe(11);


    })

})