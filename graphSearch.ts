//graphs represented as adjacency matrices with weights
//exampls of figure 22.1
//graphs = [
//  [0,1,0,0,1]
//  [1,0,1,1,1]
//  [0,1,0,1,0]
//  [0,1,1,0,1]
//  [1,1,0,1,0]
//]

//Breadth-First search
import {Queue} from "./structures"

function breadthFirstSearch(graph:Array<Array<number>>, source:number){
  let colors:Array<string>;
  let distances:Array<number>;
  let parents:Array<number>
  for(let i=0; i<graph.length; i++){
    colors[i] = "white";
    distances[i] = Infinity;
    parents[i] = null;
  }

  colors[source] = "gray";
  distances[source] = 0;
  parents[source] = null;

  let Q = new Queue<number>(graph.length);
  Q.enqueue(source);

  while(!Q.isEmpty){
    let u = Q.dequeue();
    for(let i = 0; i<graph[u].length; i++){

    }
  }

}


//Depth-First search