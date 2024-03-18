/**
 * Class representing a simple number game.
 */
class NumberGame {
    /**
     * Constructor for the NumberGame class.
     */
    constructor() {
        /** @private */
        this.currentNumber = 1;
    }

    /**
     * Method to combine the current number with the user input and update the current number.
     *
     * @param {number} userInput - The number input by the user.
     * @returns {number} The result of combining the current number with the user input.
     */
    combineNumbers(userInput) {
        this.currentNumber += userInput;
        return this.currentNumber;
    }

    /**
     * Method to get the current number in the game.
     *
     * @returns {number} The current number in the game.
     */
    getCurrentNumber() {
        return this.currentNumber;
    }
}

// Usage Example for NumberGame

const game = new NumberGame();

console.log(`Starting number: ${game.getCurrentNumber()}`);

const userInput1 = 1;
const result1 = game.combineNumbers(userInput1);
console.log(`After adding ${userInput1}, the number is: ${result1}`);

const userInput2 = 2;
const result2 = game.combineNumbers(userInput2);
console.log(`After adding ${userInput2}, the number is: ${result2}`);

const userInput3 = 3;
const result3 = game.combineNumbers(userInput3);
console.log(`After adding ${userInput3}, the number is: ${result3}`);
