var dists_A = function(coords, start) {
	var dists_A = [];
	dists_A.push(start);
	for(var i = 1; i < 10; i++) {
			var st1 = 0;
			x_crd = coords[i][st1] - coords[start][st1];
			x_crd = x_crd * x_crd;

			var st2 = 1;
			y_crd = coords[i][st2] - coords[start][st2];
			y_crd = y_crd * y_crd;

			var newdist = round(Math.sqrt( x_crd + y_crd), 1);

			dists_A.push(newdist);
	}
	// console.log(dists_A);
};




function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

module.exports = dists_A;