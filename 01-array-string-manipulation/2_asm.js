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

  const taskNames = tasks.map(task => task.name)
  console.log(taskNames)