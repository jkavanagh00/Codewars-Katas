function narcissistic(value) {
  const arr = [];
  const numStr = value.toString(); 
  
   for (let i = 0; i < numStr.length; i++) {
     const digit = parseInt(numStr[i]); 
     arr.push(digit); 
   }
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], arr.length)
  }

  return (sum === value);
}
