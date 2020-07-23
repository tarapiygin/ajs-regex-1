import Validator from '../validator';

test('must start with letters', () => {
  const userName = '-u';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('must end with letters', () => {
  const userName = 'u-';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('must start and end with letters', () => {
  const userName = 'u-u';
  const result = true;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('', () => {
  const userName = '3u';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('', () => {
  const userName = 'u3';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('', () => {
  const userName = 'u333u';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('', () => {
  const userName = 'u22';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('', () => {
  const userName = 'u22u';
  const result = true;
  expect(Validator.validateUsername(userName)).toEqual(result);
});

test('', () => {
  const userName = 'u*u';
  const result = false;
  expect(Validator.validateUsername(userName)).toEqual(result);
});
