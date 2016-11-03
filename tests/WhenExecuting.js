"use strict";

const chai = require('chai');
const expect = chai.expect;
const sut = require('../index');

describe('When invoked', () => {
    let result;
    beforeEach((done) => {
        let context = {
            succeed: (data) => {
                result = data;
                done();
            }
        };
        sut.handler(null, context);
    });
    it('Should return an array', () => {
        expect(result).to.be.an('array');
    });
});