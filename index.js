const express = require('express');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes/shape');

const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    promptUser();
});

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Text must be 3 characters or less.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hex code):',
            validate: (input) => {
                // Validation for color keyword
                const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;
                if (!colorRegex.test(input)) {
                    return 'Please enter a valid color keyword or hex code.';
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hex code):',
            validate: (input) => {
                //V alidation for color keyword
                const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;
                if (!colorRegex.test(input)) {
                    return 'Please enter a valid color keyword or hex code.';
                }
                return true;
            }
        }
    ]).then(answers => {
        const { text, textColor, shape, shapeColor } = answers;
        let svgShape;

        switch (shape) {
            case 'circle':
                svgShape = new Circle();
                break;
            case 'square':
                svgShape = new Square();
                break;
            case 'triangle':
                svgShape = new Triangle();
                break;
        }

        svgShape.setColor(shapeColor);
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        ${svgShape.render()}
                        <text x="150" y="150" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
                     </svg>`;

        fs.writeFileSync('logo.svg', svg);
        console.log('Generated logo.svg');
    });
}
