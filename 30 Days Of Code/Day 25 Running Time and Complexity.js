function processData(input) {
    function isPrime(number) {
        if (number < 2) return false;
        if (number <= 3) return true;
        if (!(number % 2) ||!(number % 3)) return false;

        const sqrt = ~~Math.sqrt(number);
        for (let i = 5; i <= sqrt; i+=6) {
            if (!(number % i) || !(number % (i + 2))) {
                return false;
            }
        }
        return true;
    }

    input.split('\n').slice(1).forEach(line => {
        if (isPrime(parseInt(line))) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    });
}  