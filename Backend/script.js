// let n = 5;
// for(let i = 1; i<n; i++){
//     console.log("hello",i);
// }

// console.log(process.argv);

let argv = process.argv;
for(let i = 2; i < argv.length ; i++){
    console.log(argv[i]);
}
let math = require('./math');

// console.log(math);
console.log(math.sum(4,5));
console.log(math.sub(4,5));
console.log(math.g);
console.log(math.PI);