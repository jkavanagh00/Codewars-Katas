function toCamelCase(str){
  if (str === '') {return ''};
  let result = [];
  const arr = str.split(/[\s-_]+/);
  arr.forEach((word, i) => {
    i > 0 ? result.push(capitalize(word)) : result.push(word);
  });
    console.log(result.join(''))
    return result.join('');
}

function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
