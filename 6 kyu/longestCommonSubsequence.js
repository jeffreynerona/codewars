function LCS(x, y) {
  var q, w;
	(x.length < y.length) ? q=x : w=x;
  (x.length < y.length) ? w=y : q=y;
	w = w.split('');
	q= q.split('');
	var index = -1
	var res = [];
	q.map(function(x,i){
		var pos = w.indexOf(x);
		if(pos>-1){
			res.push(x);
			w=w.slice(pos+1,w.length);
		}
	});
	return res.join('');
}