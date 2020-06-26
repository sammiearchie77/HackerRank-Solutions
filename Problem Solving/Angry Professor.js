function angryProfessor(k, a) {
    var count = 0;
    a.forEach(x => {
        if (x <= 0) {
            count++;
            if (count >= k) {
                return
            }
        }
    })
    if (count >= k) {
        return 'NO'
    }
    return 'YES'
}