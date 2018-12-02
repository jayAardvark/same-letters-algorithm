function checkMatch(arr) {
  var stringZero = arr[0];
  var stringOne = arr[1];
  var lowerZero = stringZero.toLowerCase();
  var lowerOne = stringOne.toLowerCase();
  var firstLetters = lowerZero.split("");
  var secondLetters = lowerOne.split("");
  var arrZeroLetters = [];
  var arrOneLetters = [];
  arrZeroLetters.push(firstLetters);
  arrOneLetters.push(secondLetters);
  console.log(arrOneLetters);
  console.log(arrZeroLetters);

  for (var i = 0; i < arrOneLetters.length; i++){
    var checkFor = arrZeroLetters.indexOf(arrOneLetters[i]);
      if (checkFor == -1){
        
        return false;
      }
      
  }return true;
  
}

checkMatch(["Mary", "Army"]);
