function findOdd(A) {
  var unique = A.filter(function(item,i,ar){ return ar.indexOf(item)===i;});
  var counts = {};
  for(var i = 0; i< A.length; i++) {
    var num = A[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  for(var i = 0; i< unique.length; i++) {
      if (Math.abs(counts[unique[i]]%2)==1){
        return unique[i];
      }
  }
}