// const CLI = require('./lib/cli');

// new CLI().run();

const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { writeFile } = require('fs');

inquirer.prompt([
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
            shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }
    
    writeFile('logo.svg', shape.render(), (err, result)=> {
        if (err) throw  err;
        console.log('SVG created!!!');
    })
   
});