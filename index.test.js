const { hello, shout } = require('./index');

describe('hello()', () => {
  it('should return a personalized greeting', () => {
    expect(hello('Alice')).toBe('Hello, Alice!');
  });

  it('should not return a greet for the wrong name', () => {
    expect(hello('Alice')).not.toBe('Hello, Bob!');
  });

  it('should not return a falsy value when provided a name', () => {
    expect(hello('Alice')).not.toBeFalsy();
  });
});

describe('shout()', () => {
  it('should convert a word to uppercase and add exclamation marks', () => {
    expect(shout('success')).toBe('SUCCESS!!!');
  });

  it('should not leave a word in lowercase', () => {
    expect(shout('success')).not.toBe('success!!!');
  });
});