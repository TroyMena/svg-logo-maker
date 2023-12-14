const { Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
    test('should set the color', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green"/>');
    })

    test('should set the color', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="blue"/>');
    })

    test('should set the color', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red"/>');
    })
})