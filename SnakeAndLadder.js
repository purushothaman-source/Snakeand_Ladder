console.log("Welcome to Snake and Ladder Game ");

class SnakeAndLadder {
    constructor() { }
    main() {
        var player = 1;
        const INITIAL_POSITION = 1;
        var dieMove = this.rollDie();
        var currentPosition = INITIAL_POSITION;
        this.checkOption(currentPosition,dieMove);
    }
    rollDie() {
        console.log(Math.floor(Math.random() * 6) + 1);
    }
    checkOption(currentPosition,dieMove) {
        var NO_PLAY = 0;
        var LADDER = 1;
        var SNAKE = 2;
        var option = Math.floor(Math.random() * 3); 
        
        switch (option) {
            case NO_PLAY:
                currentPosition += 0;
                break;
            case LADDER:
                currentPosition = currentPosition + dieMove;
                break;
            case SNAKE:
                if ((currentPosition - dieMove) <= 0)
                    currentPosition = 0;
                else
                    currentPosition = currentPosition - dieMove;
                break;
        }
    }
}
var obj1 = new SnakeAndLadder();
obj1.main();
