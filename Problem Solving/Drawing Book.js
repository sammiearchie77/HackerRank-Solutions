function pageCount(n, p) {
    let flipFromFront = Math.ceil((p-1)/2);
    let flipFromEnd = n%2 === 1 ? Math.floor((n-p)/2) : Math.ceil((n-p)/2);
    return Math.min(flipFromFront,flipFromEnd)
}