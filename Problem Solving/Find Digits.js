function findDigits(n) {
    return Array.from(String(n), Number).reduce((acc, curr, index) => {
        return acc += (n % curr) === 0 ? 1 : 0;
    }, 0)
}