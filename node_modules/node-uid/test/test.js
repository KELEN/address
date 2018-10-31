'use strict';
const node_uid = require('../index');
const assert = require('assert');
describe('the test to uid', () => {
    it('should get the correct length', () => {
        assert.equal(node_uid().length, 30);
    });

    it('should get the correct length when the length is passed', () => {
        const length = 20 + Math.floor(Math.random() * 10);
        assert.equal(node_uid(length).length, length);
    });

    it('should return a undefined if a number is not passed', () => {
        assert(!node_uid('undefined'));
    });

    it('should be unique', () => {
        const set = new Set();
        const length = 10;
        for (let i = 0; i < 10000000; i++) {
            const id = node_uid(length);
            assert(!set.has(id));
            set.add(id);
        }
    });
});
