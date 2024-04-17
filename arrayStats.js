function arrayStats(arr) {
  let returned = {};
  returned.sum = arr.reduce((acc, cur) => acc + cur);
  returned.average = (returned.sum / arr.length).toFixed(2);
  returned.min = Math.min(...arr);
  returned.max = Math.max(...arr);
  return returned;
}
