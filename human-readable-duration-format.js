function formatDuration(seconds) {
  let arr = [];
  seconds === 0
    ? arr.push('now')
    : (
      seconds >= 31536000 && (arr.push(pluralize(`${Math.floor(seconds / 31536000)} year`)), seconds %= 31536000),
      seconds >= 86400    && (arr.push(pluralize(`${Math.floor(seconds / 86400)} day`)), seconds %= 86400),
      seconds >= 3600     && (arr.push(pluralize(`${Math.floor(seconds / 3600)} hour`)), seconds %= 3600),
      seconds >= 60       && (arr.push(pluralize(`${Math.floor(seconds / 60)} minute`)), seconds %= 60),
      seconds < 60 && seconds > 0 && arr.push(pluralize(`${Math.floor(seconds)} second`))
    );
  return arr[0] === 'now' ? 'now' : formatResult(arr);
}

function formatResult(arr) {
  return arr.length < 2 ? arr[0] :
  arr.length === 2 ? arr[0] + ' and ' + arr[1] :
  arr.slice(0, arr.length-1).join(', ') + ' and ' + arr[arr.length-1];
}

const pluralize = str => Number(str.split(' ')[0]) > 1 ? str + 's' : str;
