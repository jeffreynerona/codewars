function digPow(n, p){
  var arr = n.toString().split('');
  var total = 0;
  var count = 0;
  var foundIt;
  for(var i = 0; i<arr.length; i++) {
    total += Math.pow(Number(arr[i]),p+i);
  }
  for(var y=0; y<13000; y++) {
    if(total == n*y) {
      count++;
      foundIt = y;
      y = 13000;
    }
  }
  return count > 0 ? foundIt : -1; 
}