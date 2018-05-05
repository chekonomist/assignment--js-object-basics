/**
 * createHtmlElement()
 *
 * Write a function called `createHtmlElement` that takes an object
 * as argument and returns a simple formatted HTML string.
 *
 * var exampleHtmlObj = {
 *   element: 'h1',
 *   classNames: 'grid small-section',
 *   textContent: 'Lorem ipsum dolor sit amet.'
 * }
 *
 * createHtmlElement(htmlObj)
 *  => '<h1 class="grid small-section">Lorem ipsum dolor sit amet.</h1>'
*/

function createHtmlElement(someObject){

  var objToStrict = ""
  var objElement = someObject.element
  var objText = someObject.textContent
  var objClass = someObject.classNames

  var objToStrict   =`<${objElement} class="${objClass}">${objText}</${objElement}>`
  console.log(objToStrict)
  console.log("-----")
  return objToStrict
}

// `<${element} class='$'>${text}`

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var exampleObj1 = {
  element: 'p',
  textContent: 'This is so freaking cool!',
  classNames: 'featured-section'
}

var exampleObj2 = {
  element: 'h2',
  textContent: 'Bill Brasky',
  classNames: 'ui-card-title bg--inverse'
}

var exampleObj3 = {
  element: 'span',
  textContent: 'This is an important message.',
  classNames: 'highlight text-important'
}

var htmlString1 = createHtmlElement(exampleObj1)
var htmlString2 = createHtmlElement(exampleObj2)
var htmlString3 = createHtmlElement(exampleObj3)

console.assert(htmlString1 === '<p class="featured-section">This is so freaking cool!</p>')
console.assert(htmlString2 === '<h2 class="ui-card-title bg--inverse">Bill Brasky</h2>')
console.assert(htmlString3 === '<span class="highlight text-important">This is an important message.</span>')
