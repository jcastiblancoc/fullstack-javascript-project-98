export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const validateNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');

function generateRandomNumbers() {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  return { num1, num2 };
}

export function generateMathExpression() {
  const operations = [
    { symbol: '+', operation: (a, b) => a + b },
    { symbol: '-', operation: (a, b) => a - b },
    { symbol: '*', operation: (a, b) => a * b },
  ];

  const { num1, num2 } = generateRandomNumbers();
  const selectedOperation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${selectedOperation.symbol} ${num2}`;
  const correctAnswer = selectedOperation.operation(num1, num2);

  return { question, correctAnswer };
}

export const gcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

export const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};
