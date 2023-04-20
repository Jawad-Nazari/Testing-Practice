const Calculator = require('../Functions/calculator.js');

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });
  describe('add', () => {
    it('should add two numbers', () => {
      expect(calc.add(1, 2)).toBe(3);
    });
  });
  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calc.subtract(1, 2)).toBe(-1);
    });
  });
  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(calc.multiply(1, 2)).toBe(2);
    });
  });
  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calc.divide(1, 2)).toBe(0.5);
    });
  });
});