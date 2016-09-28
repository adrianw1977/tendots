
var ExtractArr = function(Distances, which_arr) {


var arrTemp = [];
for(var i = 0; i < 10; i++) {
	arrTemp.push(Distances[which_arr][i]);
	}


min = arrTemp[0];
index = 0;
	for(var i = 0; i < 10; i++) {
		if(arrTemp[i] < min) {
			min = arrTemp[i];
			index = i;
		}
	}
console.log("Current Array", which_arr, "Minimum", min, "Indice", index);

return min;
return index;

};


module.exports = ExtractArr;

