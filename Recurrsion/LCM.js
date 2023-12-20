const gcd = (x, y) => {
    return y === 0 ? x : gcd(y, x%y)
}

const lcm = (x, y) => {
    return (x * y)/ gcd(x, y)
}

console.log(lcm(32, 120))