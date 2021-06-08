var passes = 3;
var addWithPassing = function () {
  var inner = 2;
  return passes + inner;
};
console.dir(addWithPassing());

var passes = 4;

console.dir(addWithPassing());
