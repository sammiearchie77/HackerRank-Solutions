function catAndMouse(x, y, z) {
    const distA = Math.abs(x - z); 
    const distB = Math.abs(y - z);

    if (distA == distB) return 'Mouse C';
    return distA < distB ? 'Cat A' : 'Cat B';
}