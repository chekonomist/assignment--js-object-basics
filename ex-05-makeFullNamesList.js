/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/

function getFullNames(someObj){
  var arrOfStrings = []

  for (var i = 0; i < someObj.length; i++) {
    if(someObj[i].gender === "male"){
      arrOfStrings.push("Mr. "+someObj[i].first+" "+someObj[i].last)
    }
    if (someObj[i].gender === "female") {
      arrOfStrings.push("Ms. "+someObj[i].first+" "+someObj[i].last)
    }
  }
  console.log(arrOfStrings)
  return arrOfStrings
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]

//===============================
var fullNamesList1 = getFullNames(customersList)
console.assert(typeof fullNamesList1[0] === "string")
console.assert(fullNamesList1[0] === "Mr. Joe Blogs")
console.assert(fullNamesList1[1] === "Ms. Kate Smith")
//-------------------------------
var moreNamesList = getFullNames(moreCustomersList)
console.assert(typeof moreNamesList[1] === "string")
console.assert(moreNamesList[0] === "Ms. Ruby Scooby")
console.assert(moreNamesList[2] === "Mr. Dan Theman")
