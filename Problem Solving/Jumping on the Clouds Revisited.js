function jumpingOnClouds(c, k) {
    let e = 100;
    let n = c.length;
    let i = 0;

    do {
        i = ( i + k ) % n;
        e -= c[i] * 2 + 1;
    }
    while( i !== 0 );
    return e;
}