function beautifulDays(i, j, k) {
    let beautifulDays = 0;
    while (i <= j) {
        let reversed = i.toString().split('').reverse().join('');
        if ((i - reversed) % k === 0) beautifulDays++;
        i++;
    }
    return beautifulDays;
}