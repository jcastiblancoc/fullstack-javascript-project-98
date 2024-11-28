import readlineSync from 'readline-sync';
import { gcd } from './helpers.js';
import greetUserName from './cli.js';

const username = greetUserName();

const brainGcd = () => {
  console.log('Encuentra el máximo común divisor de los números dados.');

  for (let round = 1; round <= 3; round += 1) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    const correctAnswer = gcd(num1, num2);
    const question = `Pregunta: ${num1} ${num2}`;
    console.log(question);

    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${username}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${username}!`);
};

export default brainGcd;
