import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from'./practice';

describe('capitalize', () => {

  test('turns hello into Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('turns hELLO into Hello', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

});

describe('reverseString', () => {

  test('turn Goodbye into eybdooG', () => {
    expect(reverseString('Goodbye')).toBe("eybdooG");
  })

});

describe('calculator', () => {

  let calc= new calculator();

  test('addition', () => {
    expect(calc.add(1, 2)).toBe(3);
  })

  test('subtraction', () => {
    expect(calc.subtract(5,3)).toBe(2);
  })

  test('multiplication', () => {
    expect(calc.multiply(5,3)).toBe(15);
  })

  test('division', () => {
    expect(calc.divide(6,3)).toBe(2);
  })

  test('division - divide by 0', () => {
    expect(calc.divide(6,0)).toBe('Cannot divide by zero');
  })

});

describe('caesarCipher', () => {

  test('shift abcxyz by 5', () => {
    expect(caesarCipher('abcxyz', 5)).toBe('FGHCDE');
  })

  test('shift Hello!! by 2', () => {
    expect(caesarCipher('Hello!!', 2)).toBe('JGNNQ!!');
  })

});

describe('analyzeArray', () => {

  test('empty array', () => {
    expect(analyzeArray([])).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  })

  test('array of length 1', () => {
    expect(analyzeArray([4])).toEqual({
      average: 4,
      min: 4,
      max: 4,
      length: 1
    });
  })

  test('array of length 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  })

});