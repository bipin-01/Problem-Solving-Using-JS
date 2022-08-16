/**
 * Author: Bipin poudel
 * Date-created: 16 August, 2022
 * Topic: Contains string, array manipulation concept and various methods of javascript
 * Reference: https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/#:~:text=push()%20adds%20item(s,and%20changes%20the%20original%20array.&text=unshift()%20adds%20an%20item,part%20as%20a%20new%20array.
 */

// .toString() method when apply on array convert it to string seperated with comma
const colour = [ 'green', 'yellow', 'blue', 'red']
console.log(colour.toString())                  // output: green, yellow, blue, red

// array.join() method, need delimeter: default is the ,
console.log(colour.join('-'))                   // output: green-blue-green-red

// concat joins the two array
const firstNumbers = [1, 2, 3, 4]
const secondNumber = [4, 5, 6, 7]
const merged = firstNumbers.concat(secondNumber)
console.log(merged)                                 // output: [1, 2, 3, 4, 5, 6, 7]

// push method, add items after last index of the array
const browser = ['chrome', 'safari', 'explorer']
browser.push('opera-mini')
console.log(browser)

// pop method, delete the last item of the array
const programmingLanguage = ['javascript', 'c++', 'HTML']    // opps HTML
programmingLanguage.pop();
console.log(programmingLanguage)

// splice 
// will alter the original array
const fruits = ['mango', 'apple', 'banana', 'Lichi']
fruits.splice(2, 2, 'Gauva', 'Pineapple')
console.log(fruits)

// slice
const vegetables = ['Potato', 'Pea', 'Carrot', 'Cabbage']
const sliceVeg = vegetables.slice(0, 3)
console.log(sliceVeg)
console.log(vegetables)

// split; will not modify the original string
const splitMessage = 'Bipin-is-a-Dev'
console.log(splitMessage.split('-'));
console.log(splitMessage.split('-', 2))

