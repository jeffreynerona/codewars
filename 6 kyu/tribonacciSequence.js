function tribonacci(signature,n){
 if(n && n>=3 ) {
  for(var i=0; signature.length<n;i++) {
  	signature[i+3] = signature[i]+signature[i+1]+signature[i+2];
  }
  return signature;
 }
 else {
   return n ? signature.slice(0,n) : [];
 }
}