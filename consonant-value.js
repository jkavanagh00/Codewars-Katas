function solve(s) {
  const alphabet = '0abcdefghijklmnopqrstuvwxyz'.split('');
  let max = 0;
  s.match(/[^aeiou]+/gi).forEach(str => {
    let sum = 0;
    str.split('').forEach((char) => {
    sum += alphabet.indexOf(char);
    });
    max < sum ? max = sum : max;
  });
  return max;
};
