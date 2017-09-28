function comp(array1, array2) {
if (array1 && array2) {
  var newArr2 = array2.map(function(x) {
    return Math.sqrt(x);
  }).sort();
  var x = 0;
  var i;
  for(i = 0; i<array1.length;i++) {
    if((array1.sort())[i]==newArr2[i]) {
      x = x;
    }
    else {
      x++;
    } 
  }
    return x===0;
  }
  else {
    return false;
  }
}