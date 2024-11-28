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
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
