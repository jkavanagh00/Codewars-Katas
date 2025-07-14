function encode(string) {
  return string.split('').map((char) => /[aeiou]/.test(char) ? key[char] : char).join('');
}

function decode(string) {
  return string.split('').map((char, i) => /[12345]/.test(char) ? key[char] : char).join('')
}

const key = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
  'a': 1,
  'e': 2,
  'i': 3,
  'o': 4,
  'u': 5
}
