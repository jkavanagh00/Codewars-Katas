function solution(str){
  let result = [];
   for (let i = 0; i < str.length; i+=2) {
     result.push(str.slice(i, i+2));
   }
  let last = result.at(-1);
  if (last !== undefined && last.length === 1) {last = last + '_'; result.splice(-1, 1, last); }
  return result;
}
