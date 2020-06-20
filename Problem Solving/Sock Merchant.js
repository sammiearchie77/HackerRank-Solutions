function sockMerchant(n, ar) {
    var ones = {};
    return ar.reduce((pairs, i) => {
        if (ones[i]) {
            delete ones[i];
            return pairs + 1;
        } else {
            ones[i] = true;
            return pairs;
        }
    }, 0);

}