function score(dice) {
  let score = 0;
  const results = countResults(dice);
  for (let num = 1; num <= 6; num++) {
    const count = results[num];
    if (num === 1) {
      if (count >= 3) score += 1000 + (count - 3) * 100;
      else score += count * 100;
    } else if (num === 5) {
      if (count >= 3) score += 500 + (count - 3) * 50;
      else score += count * 50;
    } else if (count >= 3) {
      score += num * 100;
    }
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
