function race(v1, v2, g) {
  const timeInHours = g / (v2 - v1);
  const time = Math.floor(timeInHours * 3600);
  if (time < 0) return null;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - (hours * 3600)) / 60);
  const seconds = time - (hours * 3600) - (minutes * 60);
  return [hours, minutes, seconds];
}
