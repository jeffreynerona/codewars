function isOnionArray(arr){
  var isit=true;
  for(var i = 0;i<Math.floor(arr.length/2);i++) {
    if(arr[i] + arr[arr.length-i-1] > 10) {
    isit=false;
    }
  }
  return isit;
}