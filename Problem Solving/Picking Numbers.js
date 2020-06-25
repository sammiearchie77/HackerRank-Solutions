function pickingNumbers(a) {
    return a.map((e, i, ar) => ar.filter(ee => ((e - ee) == 0 || (e - ee) == 1)).length).reduce((x, y) => Math.max(x, y));
}