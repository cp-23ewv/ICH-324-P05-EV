const { hello, shout } = require('./index');

test('hello returns a personalized greeting', () => {
  expect(hello('Alice')).toBe('Hello, Alice!');
});

test('shout converts a word to uppercase and adds exclamation marks', () => {
  expect(shout('success')).toBe('SUCCESS!!!');
});