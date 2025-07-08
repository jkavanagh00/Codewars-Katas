function pigIt(str){
  let result = [];
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    result.push(pigify(arr[i]))
  }
  return result.join(' ');
}

const pigify = (str) => str === '!' || str === '?' ? str : str.slice(1) + str[0] + 'ay'; 
