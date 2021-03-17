export class ListNode<T>{
  key:T;
  next:ListNode<T>|null;
  constructor(key){
    this.key = key;
    this.next = null;
  }
}

export class DoublyLinkedNode<T>{
  key:T;
  next:DoublyLinkedNode<T>;
  prev:ListNode<T> | null;
  constructor(key){
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T>{
  private head:ListNode<T>|null;
  constructor(){
    this.head = null;
  }

  /* Splices new node with key k onto the front of a Linked List */
  addElement(k:T){
    let node = new ListNode<T>(k);
    node.next = this.head;
    this.head = node;
  }

  /* Deleted first node with key k */
  deleteElement(k:T){
    let x:ListNode<T>|null = this.head;
    let y:ListNode<T>|null = null;
    while(x!= null && x.key != k){
      y = x;
      x = x.next
    }
    if(x!= null){
      if(y!= null){
        y.next = x.next;
      }
    }
  }

  search(k:T):ListNode<T>|null{
    let x = this.head;
    while(x != null && x.key !=k){
      x = x.next;
    }
    return x;
  }
}

export class DoublyLinkedList<T>{
  private head:DoublyLinkedNode<T> | null;
  constructor(){
    this.head = null;
  }
  addElement(k:T){
    let node = new DoublyLinkedNode<T>(k);
    node.next = this.head;
    if(this.head != null){
      this.head.prev = node
    }
    this.head = node;
  }
  search(k:T):DoublyLinkedNode<T>|null{
    let x = this.head;
    while(x != null && x.key !=k){
      x = x.next;
    }
    return x;
  }
  deleteElement(k:T){
    let x = this.search(k);
    if(x.prev != null){
      x.prev.next = x.next
    }else{
      this.head = x.next
    }
    if(x.next != null){
      x.next.prev = x.prev;
    }
  }
}