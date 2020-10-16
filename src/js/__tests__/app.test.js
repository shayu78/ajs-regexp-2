/* eslint-disable no-console */

import Validator from '../app';

test('class Validator instanceof', () => {
  expect(new Validator('Name1_simple')).toBeInstanceOf(Validator);
});

test('class Validator - throw (wrong name)', () => {
  expect(() => {
    const validator = new Validator(10);
    console.log(validator);
  }).toThrowError(Error);
});

test('class Validator - throw (no name)', () => {
  expect(() => {
    const validator = new Validator();
    console.log(validator);
  }).toThrowError(Error);
});

test('class Validator', () => {
  expect(new Validator('81234567890')).toEqual({ phone: '81234567890' });
});

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('Validator unifyPhoneNumber', (name, expected) => {
  const validator = new Validator(name);
  const received = validator.unifyPhoneNumber();
  expect(received).toBe(expected);
});

test('Validator unifyPhoneNumber - throw', () => {
  expect(() => {
    const validator = new Validator('86 00-000_0000');
    console.log(validator.unifyPhoneNumber());
  }).toThrowError(Error);
});
