function inArray(arr1,arr2){
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr2[j].includes(arr1[i]) ? result.push(arr1[i]) : result;
    }
  }
  return [...new Set(result)].sort();
}
