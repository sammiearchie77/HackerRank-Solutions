function acmTeam(topic) {
    let count = 1;
    let max = 0;
    topic.forEach((v, i, a) => {
        a.slice(i + 1).forEach(w => {
            let thiscnt = [...v].reduce((c, v, i) => {
                return c + (v === '1' || w.charAt(i) === '1');
            }, 0);
            if (thiscnt > max) {
                max = thiscnt;
                count = 1;
            } else { count += thiscnt === max }
        })
    });
    return [max, count];
}