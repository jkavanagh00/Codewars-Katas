function score( dice ) {
  let score = 0;
  const results = countResults(dice);
  const keys = Object.keys(results);
  for (let i = 0; i < 6; i++) {
    const key = keys[i];
    const result = results[i+1]
    key === '1' && result < 3 ? score += 100 * result : score;
    key === '1' && result === 3 ? score += 1000 : score;
    key === '1' && result > 3 ? score += 1000 + (100 * (result-3)) : score;
    key === '5' && result < 3 ? score += result * 50 : score;
    key === '5' && result === 3 ? score += 500 : score;
    key === '5' && result > 3 ? score += 500 + (50 * (result-3)) : score;
    key !== '1' && key !== '5' && result >= 3 ? score += (i+1) * 100 : score;
  }
  return score;
}

function countResults(arr) {
  let results = {
   1: 0,
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 0
  }
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
        case 1: results[1]++;
        break;
        case 2: results[2]++;
        break;
        case 3: results[3]++;
        break;
        case 4: results[4]++;
        break;
        case 5: results[5]++;
        break;
        case 6: results[6]++;
        break;
    }
  }
  return results
} 
