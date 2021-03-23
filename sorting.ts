//select sort

let arr:number[] = new Array<number>(20);
for(let i = 0; i<arr.length; i++){
  arr[i] = Math.floor(Math.random()*100)
}

function selectSort(arr:Array<number>):void{
  if(arr.length<2){
    return;
  }
  for(let i=1; i<arr.length; i++){
    let key = arr[i]
    let j=i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j]
      j=j-1;
    }
    arr[j+1] = key;
  }
}
// console.log(arr);
// selectSrt(arr);
// console.log(arr);

//merge sort
//merge two arrays
let a1 = [5,7,1];
let a2 = [2,4];
function merge(left:number[], right:number[]):number[]{
  let merged = new Array<number>(left.length + right.length);
  left.push(Infinity);
  right.push(Infinity);
  let li = 0;
  let ri = 0;
  for(let i =0; i<merged.length; i++){
    if(left[li]<right[ri]){
      merged[i] = left[li];
      li = li + 1;
    }else{
      merged[i] = right[ri];
      ri = ri + 1;
    }
  }
  return(merged);
}

function mergeSort(arr:number[]):number[]{
  //split
  if(arr.length <= 1) return arr;
  let m = Math.floor(arr.length/2);
  let left = arr.slice(0,m);
  let right = arr.slice(m, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}



//bubble sort
function bubbleSort(arr:number[]){
  if(arr.length <= 1) return arr;
  let swapped:boolean;
  let lastSorted = arr.length;
  do{
    swapped = false;
    for(let i = 0; i<lastSorted - 1; i++){
      if(arr[i]>arr[i+1]){
        let x = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = x;
        swapped = true;
      }
    }
  }while(swapped)
}

//insert sort
function insertionSort(arr:number[]){
  if(arr.length < 2){
    return;
  }
  for(let i=1; i<arr.length; i++){
    let x = arr[i];
    let swapped = false;
    for(let j = i-1; j>=0; j--){
      if(arr[j]>x){
        arr[j+1] = arr[j]
      } else{
        arr[j+1] = x;
        swapped = true;
        break;
      }
    }
    if(!swapped){
      arr[0] = x;
    }
  }
}

console.log(arr)
insertionSort(arr)
console.log(arr);