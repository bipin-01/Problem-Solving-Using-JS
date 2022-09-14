// Given two sorted array
// Write a function to merged two given array and sort them 

function mergedSortedArray(arr1, arr2) {

    const backwardArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;


    // checking edge cases

    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;


    while(arr1Item || arr2Item) {

        if(!arr2Item || arr1Item < arr2Item) {
            backwardArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }
        else {
            backwardArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }

    }

    return backwardArray;

}


const arr11 = [0, 3, 4, 31, 41];
const arr22 = [3, 4, 8, 9, 45, 67];

console.log(mergedSortedArray(arr11, arr22))