console.log("Welcome to Snake and Ladder Game ");

class SnakeAndLadder {
    constructor() { }
    main() {
        var player = 1;
        const INITIAL_POSITION = 1;
        this.rollDie();
    }
    rollDie() {
        console.log(Math.floor(Math.random() * 6) + 1);
    }
}
var obj1 = new SnakeAndLadder();
obj1.main();
