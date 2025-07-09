function moveZeros(arr) {
  let result = arr.filter(function(val) { return val !== 0; });
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? result.push(0) : result;
  }
  return result;
}
