/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import Validator from '../js/Validator.js';

test('validname test', () => {
  const valid = new Validator('Netology-21_tesT');
  expect(valid.validateUsername()).toBe(true);
});
test('invalidname test', () => {
  function regexTest(testname) {
    // eslint-disable-next-line no-new
    new Validator(testname);
  }
  expect(() => {
    regexTest('Netology-2021_tesT');
  }).toThrow('Не подходящее имя');
});
