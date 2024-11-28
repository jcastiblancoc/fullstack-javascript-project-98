import readlineSync from 'readline-sync';
import greetUserName from './cli.js';
import { generateProgression } from './helpers.js';

const username = greetUserName();

const generateProgressionGame = (userName) => {
    const rounds = 3;
    for (let i = 0; i < rounds; i++) {
      const start = Math.floor(Math.random() * 10);
      const step = Math.floor(Math.random() * 5) + 1;
      const length = Math.floor(Math.random() * 6) + 5;
      const progression = generateProgression(start, step, length);
  
      const hiddenIndex = Math.floor(Math.random() * progression.length);
      const correctAnswer = progression[hiddenIndex];
      progression[hiddenIndex] = '..';
  
      console.log(`Pregunta: ${progression.join(' ')}`);
      const userAnswer = readlineSync.question('Tu respuesta: ');
  
      if (parseInt(userAnswer, 10) === correctAnswer) {
        console.log('¡Correcto!');
      } else {
        console.log(
          `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`
        );
        console.log(`¡Intentémoslo de nuevo, ${username}!`);
        return;
      }
    }
  
    console.log(`¡Felicidades, ${username}!`);
  };
  
  export default generateProgressionGame;