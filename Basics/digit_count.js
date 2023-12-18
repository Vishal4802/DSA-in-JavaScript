function digitCount(num){
    num = Math.abs(num)
    let n = 0;
    while(num>0){
        n++;
        num = Math.floor(num/10);
    }
    return n;
}

console.log('no of digits are: '+ digitCount(-34456))