function fibonachi(num){
    let i = 0;
    let j = 1;
    let fibo = 0;
    if(num === 1){
        return 0;
    }
    if(num === 2){
        return 1;
    }
    for(let x = 2; x < num; x++){
        fibo = i + j;
        i = j;
        j = fibo;
    }
    return fibo
}

console.log(fibonachi(12));