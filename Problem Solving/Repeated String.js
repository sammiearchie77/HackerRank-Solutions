function repeatedString(s, n) {
    return ((s.match(/a/g) || []).length * Math.floor(n / s.length)) + ((s.substring(0, n % s.length)).match(/a/g) || []).length;
}