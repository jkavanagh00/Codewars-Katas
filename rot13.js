function rot13(message){
  const messageArr = message.split('')
  const alphabet1 = "abcdefghijklmABCDEFGHIJKLM".split('');
  const alphabet2 = "nopqrstuvwxyzNOPQRSTUVWXYZ".split('');
  let result = [];
  messageArr.forEach((letter) => {
    alphabet1.includes(letter) ? result.push(alphabet2[alphabet1.indexOf(letter)]) : 
    alphabet2.includes(letter) ? result.push(alphabet1[alphabet2.indexOf(letter)]) :
    result.push(letter);
  })
  return result.join('');
}
