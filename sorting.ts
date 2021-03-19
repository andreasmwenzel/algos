//insert sort

let arr = new Array<number>(50);
for(let i = 0; i<50; i++){
  arr[i] = Math.floor(Math.random()*100)
}

function insertSort(arr:Array<number>):void{
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
console.log(arr);
insertSort(arr);
console.log(arr);