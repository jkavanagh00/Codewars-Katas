function multiplicationTable(size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
  arr.push(Array.apply(null, Array(size)).map(function (y, j) { return (j + 1) * i; }));
  };
  return arr;
}
