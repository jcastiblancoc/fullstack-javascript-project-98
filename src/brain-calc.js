import readlineSync from 'readline-sync';
import { generateMathExpression } from './helpers.js';
import greetUserName from './cli.js';

const username = greetUserName();

const playCalcGame = () => {
  console.log('\n¿Cuál es el resultado de la expresión?');

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = generateMathExpression();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}.'\n¡Intentémoslo de nuevo! ${username}`);
      return;
    }
  }

  console.log(`¡Felicidades, ${username}!`);
};

export default playCalcGame;
