function findOutlier(integers){
  if (evenOrOdd(integers) === 'even') {
    for (let i = 0; i < integers.length; i++) {
      if (isEven(integers[i]) === false) {return integers[i]}
    }
  } else {
      for (let i = 0; i < integers.length; i++) {
        if (isEven(integers[i]) === true) {return integers[i]}
    }
  }
}

const evenOrOdd = arr => isEven(arr[0]) && isEven(arr[1]) || isEven(arr[1]) && isEven(arr[2]) || isEven(arr[0]) && isEven(arr[2]) ? 'even' : 'odd';

const isEven = n => n === 0 || !!(n && !(n%2));
