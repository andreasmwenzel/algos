import * as process from "process"

//Linear search
//for a given array, search each element linearly to look for target, returning the index of the target element

function linearSearch<T>(arr:Array<T>, tar:T):number{
  for(let i=0; i<arr.length; i++){
    if(arr[i]==tar){
      return i;
    }
  }
  return null;
}

let testArray:Array<number> = [0,1,2,3,4,5,6,7,8,9,10];
let target:number = 6;

let startTime = process.hrtime();
let lsResult = linearSearch(testArray, target);
const lsTime = process.hrtime(startTime);
console.log(`linear search on [${testArray}] for ${target} gives ${lsResult}`)
console.info('Execution time (hr): %ds %dms', lsTime[0], lsTime[1] / 1000000)
 

//Binary search
function binarySearch<T>(arr:Array<T>, tar:T):number{
  let left = 0;
  let right = arr.length-1;
  while(left != right){
    let center = Math.floor((left + right) / 2)
    if(arr[center] == tar){
      return center;
    }
    if(arr[center] < tar){
      left = center;
    }else{
      right = center;
    }
  }
  return null;
}

startTime = process.hrtime();
const bsResult = binarySearch(testArray, target)
const bsTime = process.hrtime(startTime);
console.log(`binary search on [${testArray}] for ${target} gives ${bsResult}`)
console.info('Execution time (hr): %ds %dms', bsTime[0], bsTime[1] / 1000000)