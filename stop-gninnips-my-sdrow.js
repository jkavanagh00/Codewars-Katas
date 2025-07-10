function spinWords(string){
  const arr = string.split(' ');
  arr.forEach((word, i) => {
    word.length > 4 ? arr.splice(i, 1, word.split('').reverse().join('')) : arr;
  });
  return arr.join(' ');
}
