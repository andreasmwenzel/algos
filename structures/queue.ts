export class Queue<T>{
  private Q:Array<T>
  private head:number = 0;
  private tail:number = 0;
  constructor(size:number){
    this.Q = new Array<T>(size)
  }
  isEmpty():boolean{
    if(this.head == this.tail){
      return true;
    }
  }
  isFull():boolean{
    if(this.head == this.Q.length-1){
      if(this.tail == 0){
        return true;
      }
    }else{
      if(this.head== this.tail+1){
        return true;
      }
    }
    return false;
  }
  enqueue(el:T){
    if(this.isFull()){
      throw new Error("Queue full");
    }
    this.Q[this.tail] = el;
    if(this.tail == this.Q.length - 1){
      this.tail = 0;
    } else{
      this.tail = this.tail + 1;
    }
  }
  dequeue():T{
    if(this.isEmpty()){
      throw new Error("Queue empty");
    }
    let el = this.Q[this.head];
    if(this.head == this.Q.length - 1){
      this.head = 0;
    } else{
      this.head = this.head + 1;
    }
    return el;
  }
}