
var nullNext = function(Distances, which_arr, index) {

Distances[which_arr][index] = 1000;
Distances[index][which_arr] = 1000;
console.log("Nulled ", which_arr, ",", index,
 "&&", index, ",", which_arr);



};


module.exports = nullNext;

