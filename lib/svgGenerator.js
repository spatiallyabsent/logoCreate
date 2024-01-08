const fs = require('fs');
const { Triangle, Circle, Square } = require('./logoshapes');

    function generateSvg(userInput) {
        let logoShape;
        switch (userInput.shape) {
            case 'Circle':
                logoShape = new Circle();
                break;
            case 'Triangle':
                logoShape = new Triangle();
                break;
            case 'Square':
                logoShape = new Square();
                break;
            default:
                throw new Error ('Invalid shape');
                return;
        }
        logoShape.setText(userInput.text);
        logoShape.setTextColor(userInput.textColor);
        logoShape.setShapeColor(userInput.shapeColor);

        const svgString = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${logoShape.render()}
        </svg>
        `;

        fs.writeFileSync('logo.svg', svgString);

    console.log('Generated logo.svg');
    }

    


module.exports = generateSvg;