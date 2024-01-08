const { Triangle, Circle, Square } = require('./logoshapes');


test('Triangle setColor sets shapeColor correctly', () => {
  const triangle = new Triangle();

  triangle.setShapeColor('red');

  expect(triangle.shapeColor).toBe('red');
});

test('Triangle setText sets text correctly', () => {
  const triangle = new Triangle();

  triangle.setText('ABC');

  expect(triangle.text).toBe('ABC');
});

test('Triangle setTextColor sets textColor correctly', () => {
  const triangle = new Triangle();

  triangle.setTextColor('blue');

  expect(triangle.textColor).toBe('blue');
});


test('renders Triangle correctly with provided shape and text colors', () => {
  const triangle = new Triangle();
  triangle.setShapeColor('red');
  triangle.setTextColor('blue');
  triangle.setText('ABC');

  const result = triangle.render();

  const expectedOutput = `<polygon points="150, 18 244, 182 56, 182" fill="red" />
      <text x="50%" y="60%" fill="blue" font-size="70" text-anchor="middle" dy=".3em">ABC</text>`;

  expect(result).toBe(expectedOutput);
});



test('Circle setColor sets shapeColor correctly', () => {
  const circle = new Circle();

  circle.setShapeColor('yellow');

  expect(circle.shapeColor).toBe('yellow');
});

test('Circle setText sets text correctly', () => {
  const circle = new Circle();

  circle.setText('JPD');

  expect(circle.text).toBe('JPD');
});

test('Circle setTextColor sets textColor correctly', () => {
  const circle = new Circle();

  circle.setTextColor('white');

  expect(circle.textColor).toBe('white');
});




test('Square setColor sets shapeColor correctly', () => {
  const square = new Square();

  square.setShapeColor('green');

  expect(square.shapeColor).toBe('green');
});

test('Square setText sets text correctly', () => {
  const square = new Square();

  square.setText('CBA');

  expect(square.text).toBe('CBA');
});

test('Square setTextColor sets textColor correctly', () => {
  const square = new Square();

  square.setTextColor('purple');

  expect(square.textColor).toBe('purple');
});


