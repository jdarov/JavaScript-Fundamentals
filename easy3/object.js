function penultimate(string) {
  return string.split(' ').at(-2);
}

console.log(penultimate('last word'));                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"