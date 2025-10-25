

const rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));

function totalArea(rectangles) {
  return rectangles
  .map(([width, height]) => width * height)
  .reduce((acc, val) => acc + val);
}

function totalSquareArea(rectangles) {
  const squares = rectangles.filter(([width, height]) => width === height);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));