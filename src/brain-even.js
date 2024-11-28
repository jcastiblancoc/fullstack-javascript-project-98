/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';
import { getRandomNumber, validateNumber } from './helpers.js';
import greetUserName from './cli.js';

const username = greetUserName();

const playEvenGame = () => {
  console.log('Responde "yes" si el numero es par, de lo contrario responde "no".\n');

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const number = getRandomNumber(1, 100);

    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log('Respuesta inválida. Responde "yes" si el numero es par, o "no" si no lo es.');
      return;
    }

    if (userAnswer !== validateNumber(number)) {
      console.log(`"${userAnswer}" es una respuesta incorrecta ;(. La respuesta correcta era "${validateNumber(number)}".\nIntentémoslo de nuevo! ${username}`);
      return;
    }
    console.log('Correcto!');
  }

  console.log(`Felicidades, ${username}`);
};

export default playEvenGame;
