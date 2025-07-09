var maxSequence = function(arr){
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j <= arr.length; j++) {
      let subarr = arr.slice(i, j);
      subarr.reduce((x, y) => x + y) > max ? max = subarr.reduce((x, y) => x + y) : max;
    }
  }
  return max;
};
