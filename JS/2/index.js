var arrays = [[1, 2, 3], [4, 5], [6]];
var new_array = arrays.reduce(function (x, y) {
  return x.concat(y);
});
console.log(new_array);
