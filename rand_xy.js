
var arr_x = [];
var arr_y = [];
var noPoints = 10;

for(var i = 0; i < noPoints; i++) {
	x_new = 100 * Math.random();
	x_new = round(x_new, 1);
	arr_x.push(x_new);
}
// console.log(arr_x);

for(var i = 0; i < noPoints; i++) {
	y_new = 100 * Math.random();
	y_new = round(y_new, 1);
	arr_y.push(y_new);
}
// console.log(arr_y);


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

coords2 =[];
for(var i = 0; i < noPoints; i++) {
	var temp = [arr_x[i], arr_y[i]];
	coords2.push(temp);
}
console.log(coords2);







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

