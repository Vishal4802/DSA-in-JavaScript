function digitCount(num){
    num = Math.abs(num)
    let n = 0;
    while(num>0){
        n++;
        num = Math.floor(num/10);
    }
    return n;
}

function palidrome(num){
    let count = digitCount(num);
    num = num.toString();
    for(let i = 0; i<Math.floor(count/2); i++){
        if(num[i] !== num[count-i-1]){
            return false;
        }
    } 
    return true;
}

console.log(palidrome(232));
console.log(palidrome(2331));