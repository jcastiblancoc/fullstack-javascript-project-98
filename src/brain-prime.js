import readlineSync from 'readline-sync';
import { isPrime } from './helpers.js';

const playGameIsPrime = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!\nResponde "yes" si el número dado es primo. De lo contrario, responde "no".`);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es incorrecto. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentemos otra vez, ${name}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${name}!`);
};

export default playGameIsPrime;
