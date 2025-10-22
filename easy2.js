const TRIANGLE_PIECES = '*';

function triangle(num) {
  let triangleShape = '';
  for (let i = 1; i <= num; i++) {
    triangleShape += (' '.repeat(num-i) + TRIANGLE_PIECES.repeat(i));
    triangleShape += '\n'; 
  }
  return triangle;``
}

console.log(triangle(5));
console.log(triangle(9));
