//WHY CLOUSERS ON FIRST PLACE

// LEXICAL SCOPE
// upper scope.

//WHY CLOUSERS ON FIRST PLACE

// LEXICAL SCOPE
// upper scope.
// let f;

// if(true){
//     let i  = 1
//    f =()=>{
//         console.log(i)
//     }
// }

// console.dir(f)
// f();

let f = () => {
  let i = 1;
  let j = 2;
  var a = () => {
    console.log(i + j);
  };
  return a;
};
console.dir(f());

var add = (function (s) {
  var counter = s;
  return function (inner) {
    counter += inner;
    return counter;
  };
})(3);

console.dir(add);
add(1);
console.dir(add);
