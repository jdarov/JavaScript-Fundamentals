function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+(?:\.[A-Za-z]+)*$/i;

  const oneAt = email.split('@').length - 1 === 1;

  return oneAt && pattern.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));
console.log(isValidEmail('foo@baz.com'));
console.log(isValidEmail('foo@baz.ph'));
console.log(isValidEmail('foo@baz@bar.ph'));
console.log(isValidEmail('HELLO123@baz'));
console.log(isValidEmail('foo.bar@baz.to'));
console.log(isValidEmail('foo@baz.'));
console.log(isValidEmail('foo_bat@baz'));
console.log(isValidEmail('foo@bar.a12'));
console.log(isValidEmail('foo_bar@baz.com'));
console.log(isValidEmail('foo@bar.....com'));