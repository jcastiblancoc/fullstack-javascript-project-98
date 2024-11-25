import readlineSync from 'readline-sync';

const greetUserName = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  return name;
};

export default greetUserName;
