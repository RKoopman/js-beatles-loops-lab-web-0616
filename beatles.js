function theBeatlesPlay(musicians, instruments){

  var members = [];

  for (var i = 0; i < musicians.length; i++) {
    // iterate over musicians and instruments, grab the values stored at index i of both arrays
    // create a new string based on values at those indices, and push the new string into the array
    members.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return members
}


function johnLennonFacts(facts){
  var johnsArray = [];
  var i = 0;
  while (i < facts.length){
    johnsArray.push(`${facts[i]}!!!`);
    i++
  }
  return johnsArray
}




function iLoveTheBeatles(param){
  var bealteLove = [];
  do {
    bealteLove.push(`I love the Beatles!`);
    param++
  } while (param < 15);
  return bealteLove
};
