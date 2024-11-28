import readlineSync from 'readline-sync';
import { isPrime } from './helpers.js';
import greetUserName from './cli.js';

const username = greetUserName();

const playGameIsPrime = () => {
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.\n¡Intentémoslo de nuevo, ${username}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${username}!`);
};

export default playGameIsPrime;
