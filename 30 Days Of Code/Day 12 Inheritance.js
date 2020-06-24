class Student extends Person {


    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores

    };

    calculate() {
        let avg = this.scores.reduce((a, b) => a + b) / this.scores.length;
        if (avg >= 90 && avg <= 100) return "O";
        else if (avg >= 80 && avg < 90) return "E";
        else if (avg >= 70 && avg < 80) return "A";
        else if (avg >= 55 && avg < 70) return "P";
        else if (avg >= 40 && avg < 55) return "D";
        else return "T";
    }
}