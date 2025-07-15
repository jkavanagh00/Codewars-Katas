function solution(string) {
  const arr = string.split('')
  let offset = 0;
  string.split('').forEach((letter, i) => {
    if (!isLowerCase(letter)) {
      arr.splice(i+offset, 0, ' ');
      offset++;
    };
  })
  return arr.join('')
}

function isLowerCase(str) {
    return str === str.toLowerCase() &&
           str !== str.toUpperCase();
}
