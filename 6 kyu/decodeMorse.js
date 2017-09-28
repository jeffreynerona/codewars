decodeMorse = function(morseCode){
  var letters;
  var words;
  var toLetter;
  words = morseCode.trim().split("   ").map(function(word) {
    letters = word.split(" ").map(function(letters) {
    toLetter = MORSE_CODE[letters];
      return toLetter;
    }).join("");
    return letters;
  }).join(" ");
  return words;
}