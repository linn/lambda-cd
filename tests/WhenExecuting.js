"use strict";

const chai = require('chai');
const expect = chai.expect;
const sut = require('../index');

describe('When invoked with data', () => {
    let result;
    beforeEach((done) => {
        let callback = (err, data) => {
            result = data;
            done();
        };
        sut.handler([0, 1, 2, 3, 4, 5], {}, callback);
    });
    it('Should return an array', () => {
        expect(result).to.be.an('array');
    });
    it('Should have correct results', () => {
        expect(result).to.be.eql([true, false, true, false, true, false]);
    });
});
describe('When invoked with nothing', () => {
    let error;
    beforeEach((done) => {
        let callback = (err, data) => {
            error = err;
            done();
        };
        sut.handler(null, {}, callback);
    });
    it('Should return an error', () => {
        expect(error).to.be.an('Error');
    });
    it('Should have an error object', () => {
        expect(error).to.exist;
    });
});