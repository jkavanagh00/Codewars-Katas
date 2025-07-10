function formatDuration (seconds) {
  let arr = [];
  if (seconds === 0) { return 'now' }
  if (seconds >= 31536000)  { arr.push(pluralize(`${Math.floor(seconds/31536000)} year`)); seconds = seconds % 31536000}
  if (seconds >= 86400)     { arr.push(pluralize(`${Math.floor(seconds/86400)} day`)); seconds = seconds % 86400}
  if (seconds >= 3600)      { arr.push(pluralize(`${Math.floor(seconds/3600)} hour`)); seconds = seconds % 3600}
  if (seconds >= 60)        { arr.push(pluralize(`${Math.floor(seconds/60)} minute`)); seconds = seconds % 60}
  if (seconds < 60 && seconds > 0)         { arr.push(pluralize(`${Math.floor(seconds)} second`));}
  console.log(arr)
  return formatResult(arr)
}

function formatResult(arr) {
  return arr.length < 2 ? arr[0] :
  arr.length === 2 ? arr[0] + ' and ' + arr[1] :
  arr.slice(0, arr.length-1).join(', ') + ' and ' + arr[arr.length-1];
}

const pluralize = str => Number(str.split(' ')[0]) > 1 ? str + 's' : str;
