const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shapes');
const { writeFile } = require('fs');

class CLI {
    async run() {
        await inquirer.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to draw?',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like to use?'
            },
            {
                type: 'input',
                name: 'text',
                message: 'Please enter the text to write on top of s Shape. Text must be 3 or less characters',
                validate: function (text) {
                    if (text.length <= 3) {
                        return true;
                    }
                    return 'Please enter a text that is 3 or less characters';
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like to use for text?'
            }
        ])
        .then(answers => {
            console.log(answers);
            let shape;
            switch (answers.shape) {
                case 'Circle':
                    shape = new Circle();
                    break;
                case 'Square':
                    shape = new Square();
                    break;
                case 'Triangle':
                    shape = new Triangle();
                    break;
            }
            shape.setColor(answers.shapeColor);
           
        });
    }
       
}

module.exports = CLI;