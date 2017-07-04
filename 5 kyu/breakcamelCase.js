function solution(string) {
    return string.split("").map((function(x){return x == x.toUpperCase() ? " "+x:x})).join("");
}