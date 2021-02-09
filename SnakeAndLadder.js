console.log("Welcome to Snake and Ladder Game ");

class SnakeAndLadder {
    constructor() { }
    main() {
        var player = 1;
        const INITIAL_POSITION = 0;
        this.currentPosition = INITIAL_POSITION;
        var winningPosition = 100;
        var playerRolled = 0
        while (this.currentPosition < winningPosition) {
            var dieMove = this.rollDie();
            playerRolled++;
            this.currentPosition = this.checkOption(this.currentPosition, dieMove);
            console.log("PlayerPosition = " + this.currentPosition);
        }
        console.log("Player Rolled "+playerRolled +" times to won the game");
    }
    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    checkOption(currentPosition, dieMove) {
        var NO_PLAY = 0;
        var LADDER = 1;
        var SNAKE = 2;
        this.option = Math.floor(Math.random() * 3);

        switch (this.option) {
            case NO_PLAY:
                currentPosition += 0;
                break;
            case LADDER:
                if ((currentPosition + dieMove) > 100)
                    currentPosition = currentPosition;
                else
                    currentPosition = currentPosition + dieMove;
                break;

            case SNAKE:
                if ((currentPosition - dieMove) <= 0)
                    currentPosition = 0;
                else
                    currentPosition = currentPosition - dieMove;
                break;
        }
        return currentPosition;
    }

}
var obj1 = new SnakeAndLadder();
obj1.main();
