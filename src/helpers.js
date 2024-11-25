// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const validateNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');
