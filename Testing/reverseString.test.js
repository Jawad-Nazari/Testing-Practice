const reverseString = require('../Functions/reverseString.js');
describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('Jawad')).toBe('dawaJ');
    expect(reverseString('Hey')).toBe('yeH');
  });
});