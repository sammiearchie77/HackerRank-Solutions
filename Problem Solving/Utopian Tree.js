function utopianTree(n) {

    let height = 1;
    for (let i = 0; i < n; i++) {
        height = (i % 2 == 0) ? height *= 2 : height += 1;
    }
    return height;

}