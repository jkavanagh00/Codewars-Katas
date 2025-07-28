const incrementString = string => /\d/.test(string) === false ? string + '1' : string.replace(/\d+$/, '') + String(Number(string.match(/(\d+)/)[1])+1).padStart(string.match(/(\d+)/)[1].length, '0');
