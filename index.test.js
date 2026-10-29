const { hello, shout } = require('./index');

test('hello returns a personalized greeting', () => {
  expect(hello('Alice')).toBe('Hello, Alice!');
});

test('shout converts a word to uppercase and adds exclamation marks', () => {
  expect(shout('success')).toBe('SUCCESS!!!');
});

test('hello does not return a greet for the wrong name', () => {
  expect(hello('Alice')).not.toBe('Hello, Bob!');
});

test('hello does not return a falsy value when provided a name', () => {
  expect(hello('Alice')).not.toBeFalsy();
});

test('shout does not leave a word in lowercase', () => {
  expect(shout('success')).not.toBe('success!!!');
});