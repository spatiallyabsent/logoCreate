
const userShapeChoice = require('./lib/userInput');
const generateSVG = require('./lib/svgGenerator');

async function main() {
  try {
    const userInput = await userShapeChoice();
    generateSVG(userInput);
  } catch(error) {
    console.error(`An Error has occured: ${error.message}`);
  }
}

main();
