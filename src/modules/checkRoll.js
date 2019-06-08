export default function checkRoll(array) {
  if (array[0] === array[1] && array[1] === array[2]) {
    return `Triple ${array[0]}`;
  } if (array[0] === array[1] && array[1] !== array[2]) {
    return `${array[2]}`;
  } if (array[0] === array[2] && array[1] !== array[0]) {
    return `${array[1]}`;
  } if (array[1] === array[2] && array[0] !== array[1]) {
    return `${array[0]}`;
  } if (array[0] + array[1] + array[2] === 6 && array[0] * array[1] !== 4) {
    return '1 2 3! You Lose!';
  } if (array[0] + array[1] + array[2] === 15 && array[0] * array[1] !== 25) {
    return '4 5 6! You Win!';
  }
  return '';
}
