var dists_C = function(coords, start) {
	var dists_C = [];
	for(var i = (start - 1); i >= 0; i--) {
			var st1 = 0;
			x_crd = coords[i][st1] - coords[start][st1];
			x_crd = x_crd * x_crd;

			var st2 = 1;
			y_crd = coords[i][st2] - coords[start][st2];
			y_crd = y_crd * y_crd;

			var newdist = round(Math.sqrt( x_crd + y_crd), 1);

			dists_C.push(newdist);
	}
	// console.log(dists_C);
	// console.log(Rev_C(dists_C));
	var dists_C2 = Rev_C(dists_C);
	// console.log(dists_C2);
	return dists_C2;
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function Rev_C(arr) {
  var index = 0;
  var temp = [];
  for(var i= arr.length - 1; i >= 0; i--) {
	temp[index] = arr[i];
	index++;
	}
  return temp;
}

module.exports = dists_C;