const { Circle, Square, Triangle } = require('../shapes/shape');

test('Circle renders correctly', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square renders correctly', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
});

test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});
