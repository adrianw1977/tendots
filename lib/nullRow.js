var nullRowCol = function(Distances, temp1) {


	// for(var i = 0; i < 10; i++) {
	// 	for(var j = 0; j < 10; j++) {
	// 		if(i === temp1) {
	// 			Distances[i][j] = 1000;
	// 		}
	// 	}
	// }


	for(var i = 0; i < 10; i++) {
		for(var j = 0; j < 10; j++) {
			if(j === temp1) {
				Distances[i][j] = 1000;
			}
		}
	}

};


module.exports = nullRowCol;