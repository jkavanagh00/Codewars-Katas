function findOdd(A) {
  const digits = Array.from(new Set(A))
  for (let i = 0; i < digits.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (digits[i] === A[j]) {count ++}
    }
    if (count % 2 !== 0) {return digits[i]}
  }
}
