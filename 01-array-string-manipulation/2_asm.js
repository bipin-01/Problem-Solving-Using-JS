/**
 * Author: Bipin poudel
 * Date-created: 16 August, 2022
 * Topic: filter, map, reduce, forEach, every, some, includes
 */


/**
 * map
 *map executes that callback on every element within it, returning a new array with all of the value that callback returned
 * 
 */

 const tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];

  // example1
  const taskNames = tasks.map(task => task.name)
  console.log(taskNames)


// getting confused with the output need to work on this later
//   const newArray = taskNames.map(function callback(task, index, array) {
//     return array
//   })

// console.log(newArray)


// example2
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2)
console.log(doubled)



// filter


// example - 1
let arr = [2, 4, 5, 6, 7, 8];
const lesser = arr.filter(num => num < 5);
console.log(lesser)

// example - 2
const ages = [ 32, 33, 16, 18, 40];
const result = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18;
}