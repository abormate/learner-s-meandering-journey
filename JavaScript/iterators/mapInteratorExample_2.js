const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(letter => letter[0]);

console.log(secretMessage.join(''));

// Outputs Hello World

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map( num => num/100);

console.log(smallNumbers);

// Outputs small integers 1 to 5
