function solution(number){
  var sum = 0;
  var i = 0;
  for (i; i<number; i++) {
    if(i%3 == 0 || i%5 == 0) {
    sum = sum + i;
    }
  }
  return sum;
}