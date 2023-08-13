import { Calculator } from "./testService";

describe('dummy test', () => {
    it('should add two numbers correctly', () => {
        const calculator = new Calculator();
        expect(calculator.add(4, 5)).toBe(9);
    });
    it('should subtract two numbers correctly', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(4, 5)).toBe(-1);
    });
    it('should multiply two numbers correctly', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(4, 5)).toBe(20);
    });
    it('should divide two numbers correctly', () => {
        const calculator = new Calculator();
        expect(calculator.divide(4, 5)).toBe(0.8);
    });
});