Array.prototype.square = function() {
  return this.map(val => Math.pow(val, 2));
}

Array.prototype.cube = function() {
  return this.map(val => Math.pow(val, 3));
}

Array.prototype.average = function() {
  return this.length > 0 ? this.reduce((x,y) => x+y)/this.length : NaN;
}

Array.prototype.sum = function() {
  return this.reduce((x,y) => x+y)
}

Array.prototype.even = function() {
  return this.filter(e => e % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(e => e % 2 !== 0)
}
