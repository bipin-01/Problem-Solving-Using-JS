// write a function to reverse a given string
// for e.g. if you are given 'Bipin Is a Dev'
// The output should be 'veD a sI nipiB'

const reverseString = (str)  => {           // O(n)

    //check Input

    if(!str || str.length < 2 ||  typeof str !== str ) {
        return 'Enter valid input'
    }

    const backWardArr = [];
    const strLength = str.length;

    for(  let i = strLength - 1; i>=0; i--) {
        backWardArr.push(str[i]);
    }

    return backWardArr.join('');
}

console.log(reverseString(undefined));




// other js inbuild function to perform the same operation 
// one line solution using js inbuilt functionalities

const reverse1 = str => str.split('').reverse().join('');
const reverse2 = str => [...str].reverse().join('');
