function isValidWalk(walk) {
	var y=0;
	var x=0;
	var max=0;
	walk.map(function(i) {
		switch(i) {
		  case "n":
			y++;
			max++;
			break;
		  case "s":
			y--;
			max++;
			break;
		  case "w":
			x--;
			max++;
			break;
		  case "e":
			x++;
			max++;
			break;
		}
	});
	return (max == 10 && x == 0 && y == 0) ? true : false;
}