/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/


function makeNamesObject(nameOne,nameTwo,nameThree){
  var fullNamesObj = {}
  var lineOne = nameOne.split(" ")
  var lineTwo = nameTwo.split(" ")
  var lineThree = nameThree.split(" ")
  var firstNameOne = lineOne[0]
  var lastNameOne = lineOne[1]
  var firstNameTwo = lineTwo[0]
  var lastNameTwo = lineTwo[1]
  var firstNameThree = lineThree[0]
  var lastNameThree = lineThree[1]

  fullNamesObj[firstNameOne] = lastNameOne
  fullNamesObj[firstNameTwo] = lastNameTwo
  fullNamesObj[firstNameThree] = lastNameThree

  // console.log(lineOne)
  // console.log(lineTwo)
  // console.log(lineThree)
  // console.log("----")
  // for (var i = 0; i < [...arguments].length ; i++){
  //   var nameArr = arguments[i].split(" ")
  //   var firstName = nameArr[0]
  //   var lastName = nameArr[1]
  //   fullNamesObj[firstName] = lastName

  console.log(fullNamesObj)
  console.log("-----")
  return fullNamesObj
  }

  




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
