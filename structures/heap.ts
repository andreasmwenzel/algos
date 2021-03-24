class Heap{
    private size;
    public heapArray:number[];
    constructor(unheaped:number[]){
        this.size = unheaped.length;
        this.heapArray = unheaped;
        for(let i = Math.floor((this.size-1)/2); i>=0; i--){
            this.maxHeapify(i)
        }
    }
    private left(i){
        return 2*i+1
    }
    private right(i){
        return 2*i + 2;
    }
    private parent(i){
        return Math.floor( ( i - 1) / 2);
    }
    private maxHeapify(i:number){
        let l = this.left(i);
        let r = this.right(i);
        
        let largest = i;
        if(l < this.size && this.heapArray[l] > this.heapArray[i]){
            largest = l;
        }
        if(r < this.size && this.heapArray[r] > this.heapArray[largest]){
            largest = r;
        }
        if(largest != i){
            let x = this.heapArray[i];
            this.heapArray[i] = this.heapArray[largest];
            this.heapArray[largest] = x;
            this.maxHeapify(largest);
        }
    }
}

let array = [ 42, 33, 80, 84, 32, 24, 74, 52, 50, 38 ]

console.log(array);
let myHeap = new Heap(array);
console.log(myHeap.heapArray);