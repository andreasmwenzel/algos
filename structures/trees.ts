import {Queue} from "./queue"

class TreeNode<T>{
  key:T;
  left:TreeNode<T>;
  right:TreeNode<T>;

  constructor(key:T){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree{
  private root:TreeNode<number> | null;
  private size:number;
  private height:number;

  constructor(){
    this.root = null;
    this.size = 0;
    this.height = 0;
  }

  private printUtil(root:TreeNode<number>, space:number){
    if(root == null){
      return;
    }
    space += 10;
    this.printUtil(root.right, space);
    process.stdout.write("\n");
    for(let i = 10; i<space; i++){
      process.stdout.write(" ")
    }
    process.stdout.write(root.key.toString());
    this.printUtil(root.left, space);
  }
  public print(){
    this.printUtil(this.root, 0);
  }

  private insertNode(node:TreeNode<number>){
    let x = this.root;
    let y = null;
    while(x!=null){
      y = x;
      if(node.key <= x.key){
        x = x.left;
      }else{
        x = x.right;
      }
    }
    if(y == null){
      this.root = node;
    } else if(node.key <= y.key){
      y.left = node;
    } else{
      y.right = node;
    }
    console.log(y);
  }
  insert(num:number){
    this.insertNode(new TreeNode<number>(num));
  }
}
