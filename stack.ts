export class Stack<T>{
  private S:Array<T>;
  private top:number=-1;
  constructor(size:number){
    this.S = new Array<T>(size);
  }
  isEmpty():boolean{
    if (this.top == -1){
      return true;
    }
    else{
      return false;
    }
  }
  size():number{
    return this.top+1;
  }
  totalSize():number{
    return this.S.length;
  }
  push(el:T):number{
    if(this.top == this.S.length - 1){
      throw Error("Stack overflow");
    }
    this.top = this.top+1;
    this.S[this.top] = el;
    return this.top+1;
  }
  pop():T{
    if(this.isEmpty()){
      throw Error("Stack underflow");
    }
    this.top = this.top - 1;
    return this.S[this.top+1]
  }
}