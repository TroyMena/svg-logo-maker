const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shapes");

describe("SVG", () => {
    test('should set the text and color', () => {
        const svg = new SVG();
        svg.setText("A", "red");
        expect.svg(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="55" text-anchor="middle" fill="red">A</text></svg>');
    })
})