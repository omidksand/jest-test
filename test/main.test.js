const Num = require('../src');

describe('Num', () => {
    it('Must be equal', () => {
        expect(Num(10)).toEqual(10);
    })
})