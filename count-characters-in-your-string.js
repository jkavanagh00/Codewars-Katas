function count(string) {
  if (string.length < 1) return {}
  let counter = Object.fromEntries([...new Set(string.split(''))].map(key => [key, 0]))
  for (let i = 0; i < string.length; i++) {
    counter[string[i]]++;
  }
  return counter;
}
