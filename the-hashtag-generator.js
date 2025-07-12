function generateHashtag (str) {
  if (!str || /^\s*$/.test(str)) return false;
  const arr = str.split(' ');
  arr.unshift('#')
  arr.forEach((word, i)=> {
    word !== '#' ? arr.splice(i, 1, String(word).charAt(0).toUpperCase() + String(word).slice(1)) : word});
  return arr.join('').length > 140 ? false : arr.join('');
};
