const inquirer = require('inquirer');


async function userShapeChoice() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Max of three characters to fit text inside the shape:',
           validate: (value) => value.length > 0 && value.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Ennter the color you want the text to be. (can use hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Pick one of the follow shapes:',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color do you want the shape to be (can use hexadecimal):',
        },
      ]);
      return userInput;
}

module.exports = userShapeChoice;
