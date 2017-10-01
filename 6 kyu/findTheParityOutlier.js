function findOutlier(integers){
    var even = 0;
	var odd = 0;
	var pos, findWhat, newArr;
	newArr = integers.map(function(x){
		if(x%2==0) {
			even++;
			return 1;
		}
		else {
			odd++;
			return 0;
		}
	});
	findWhat = even > odd ? 0 : 1;
	pos = newArr.indexOf(findWhat);
	return integers[pos];
}