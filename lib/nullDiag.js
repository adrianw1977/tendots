
var nullDiag = function(Distances) {

	for(var i = 0; i < 10; i++) {
		for(var j = 0; j < 10; j++) {
			if(Distances[i][j] === 0) {
				Distances[i][j] = 1000;
			}
		}
	}
};


module.exports = nullDiag;

