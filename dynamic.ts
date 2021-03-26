
//recursive fib
function fib(n:number):number{
    if(n <= 1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
for(let i = 0; i<40; i++){
    console.log(`Fib of ${i} is ${fib(i)}`)
}
//top-down fib
let fibLookupTD = new Array<number>().fill(null);
function fibTopDown(n:number):number{
    if(fibLookupTD[n]==null){
        if(n <= 1){
            fibLookupTD[n] = n;
        } else{
            fibLookupTD[n] = fibTopDown(n-1) + fibTopDown(n-2);
        }
    }
    return fibLookupTD[n];
}

for(let i = 0; i<40; i++){
    console.log(`Fib of ${i} is ${fibTopDown(i)}`)
}

//bottom-up fib
function fibBottomUp(n:number):number{
    let f = new Array<number>(n+1).fill(null);
    f[0] = 0;
    f[1] = 1;

    for(let i = 2; i<=n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n]
}

for(let i = 0; i<40; i++){
    console.log(`Fib of ${i} is ${fibBottomUp(i)}`)
}