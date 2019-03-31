var arg1 = process.argv[2];
var arg2 = process.argv[3];

import math from './modules_default_export_math.js';

console.log(math.PI);
console.log(math.sqrt(+arg1));
console.log(math.square(+arg2));