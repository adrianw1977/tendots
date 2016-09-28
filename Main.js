
coords = [
	[6.4, 89.0],
	[5.0, 51.1],
	[2.0, 22.4],
	[75.2, 19.7],
	[92.3, 10.8],
	[15.5, 20.3],
	[8.3, 11.3],
	[79.6, 66.3],
	[5.6, 93.4],
	[11.0, 2.8],
    ];

var start = 0;
// require('./dists_A')(coords, start);
var A = require('./lib/dists_A')(coords, start);
console.log(A);
console.log('hello arrayee');
var Arraye = A;
// console.log(Arraye);
var Arraye = [];

var start = 1;
for(var i = 0; i < coords.length; i++) {
	var start = i;
	// require('./dists_B')(coords, start);
	var B2 = require('./lib/dists_B')(coords, start);
	// console.log(B2);

	// require('./dists_C')(coords, start);
	var C2 = require('./lib/dists_C')(coords, start);
	// console.log(C2);
	
	var DistsBandC = C2.concat(B2);
    // console.log(DistsBandC);
    Arraye.push(DistsBandC);
	}

console.log(Arraye);


console.log("***********************************************************************");
var Distances = Arraye;

// Distances =
// [ [ 0, 37.9, 66.7, 97.7, 116.2, 69.3, 77.7, 76.6, 4.5, 86.3 ],
//   [ 37.9, 0, 28.9, 76.9, 96.2, 32.5, 39.9, 76.1, 42.3, 48.7 ],
//   [ 66.7, 28.9, 0, 73.2, 91, 13.7, 12.8, 89.2, 71.1, 21.6 ],
//   [ 97.7, 76.9, 73.2, 0, 19.3, 59.7, 67.4, 46.8, 101.4, 66.4 ],
//   [ 116.2, 96.2, 91, 19.3, 0, 77.4, 84, 56.9, 119.7, 81.7 ],
//   [ 69.3, 32.5, 13.7, 59.7, 77.4, 0, 11.5, 78.9, 73.8, 18.1 ],
//   [ 77.7, 39.9, 12.8, 67.4, 84, 11.5, 0, 90, 82.1, 8.9 ],
//   [ 76.6, 76.1, 89.2, 46.8, 56.9, 78.9, 90, 0, 78.8, 93.5 ],
//   [ 4.5, 42.3, 71.1, 101.4, 119.7, 73.8, 82.1, 78.8, 0, 90.8 ],
//   [ 86.3, 48.7, 21.6, 66.4, 81.7, 18.1, 8.9, 93.5, 90.8, 0 ] ];


var distNullDiag = require('./lib/nullDiag')(Distances);
// console.log(Distances[4][1]);

var which_arr = 5;  // Change THIS Only
console.log("5tarting array =", which_arr);

var Sum_Path_A = 0;
var Sum_Path_B = 0;
var knock_off = [which_arr];


var first_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_A += min;
console.log("Sum Path A =", Sum_Path_A);
Current_A = index;
knock_off.push(Current_A);
var first_null = require('./lib/nullNext')(Distances, which_arr, index);

var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_B += min;
console.log("Sum Path B =", Sum_Path_B);

Current_B = index;
knock_off.push(Current_B);
console.log("Zebra222");
var second_null = require('./lib/nullNext')(Distances, which_arr, index);

console.log(knock_off);
console.log(Distances);

console.log("***********************************************************************");

var temp1 = knock_off[0];
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
var temp1 = knock_off[1];
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
var temp1 = knock_off[2];
var knock_off1 = require('./lib/nullCol')(Distances, temp1);

console.log("***********************************************************************");
which_arr = Current_A;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_A += min;
Current_A = index;
console.log("Sum Path A =", Sum_Path_A);
var temp1 = index
console.log(temp1);
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
console.log("Current = ", which_arr);

which_arr = Current_B;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_B += min;
Current_B = index;
console.log("Sum Path B =", Sum_Path_B);
var temp1 = index
console.log(temp1);
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
console.log("Current = ", which_arr);
console.log(Distances);

console.log("***********************************************************************");
which_arr = Current_A;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_A += min;
Current_A = index;
console.log("Sum Path A =", Sum_Path_A);
var temp1 = index
console.log(temp1);
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
console.log("Current = ", which_arr);

which_arr = Current_B;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_B += min;
Current_B = index;
console.log("Sum Path B =", Sum_Path_B);
var temp1 = index
console.log(temp1);
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
console.log("Current = ", which_arr);
console.log("***********************************************************************");
which_arr = Current_A;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_A += min;
Current_A = index;
console.log("Sum Path A =", Sum_Path_A);
var temp1 = index
console.log(temp1);
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
console.log("Current = ", which_arr);

which_arr = Current_B;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_B += min;
Current_B = index;
console.log("Sum Path B =", Sum_Path_B);
var temp1 = index
console.log(temp1);
var knock_off1 = require('./lib/nullCol')(Distances, temp1);
console.log("Current = ", which_arr);
console.log("***********************************************************************");
which_arr = Current_A;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_A += min;
Current_A = index;
console.log("Sum Path A =", Sum_Path_A);

which_arr = Current_B;
console.log("Current = ", which_arr);
var second_index = require('./lib/ExtractArr')(Distances, which_arr);
Sum_Path_B += min;
Current_B = index;
console.log("Sum Path B =", Sum_Path_B);

var Sum_Total = Sum_Path_A + Sum_Path_B;
console.log("Sum Path Total =", Sum_Total);
// return Sum_Total;
