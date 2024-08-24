# Tic-Tac-Toe Game

## Overview

This is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, JavaScript, and Bootstrap. The game allows two players to play Tic-Tac-Toe on a 3x3 grid. The first player to align three of their marks (either X or O) in a row, column, or diagonal wins the game. If all cells are filled without a winner, the game ends in a draw.

## Features

- **Responsive Design:** The game is built using Bootstrap, ensuring it looks good on all devices, including desktops, tablets, and mobile phones.
- **Interactive Gameplay:** The game dynamically updates the grid based on player input and checks for a winner after each move.
- **Restart Option:** A "New Game" button allows players to reset the game and start a new round.
- **User Feedback:** The game displays messages to the players indicating the current state of the game, such as whose turn it is, who has won, or if the game is a draw.

## Installation

To run this game locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/SilverStorm2/tic-tac-toe-game.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd tic-tac-toe
    ```
3. **Open the `index.html` file in your browser to start playing the game.**

## How to Play

1. **Game Start:** The game starts with an empty 3x3 grid.
2. **Taking Turns:** Players take turns clicking on the empty cells. Player 1 uses "X" and Player 2 uses "O".
3. **Winning the Game:** The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
4. **Draw:** If all cells are filled without a winner, the game ends in a draw.
5. **Restart:** Click the "New Game" button to reset the board and start a new game.

## File Structure

- **`index.html`:** The main HTML file that sets up the structure of the game board and includes the necessary scripts and stylesheets.
- **`css/style.css`:** The stylesheet for the game, including custom styles and grid layout.
- **`js/functions.js`:** Contains utility functions used throughout the game, such as displaying messages and clearing the board.
- **`js/script.js`:** The main script that handles the game logic, including checking for a winner and handling player input.

## Technologies Used

- **HTML5:** Structure and content of the game.
- **CSS3:** Styling the game board and making the game responsive.
- **JavaScript:** Handling game logic, user interaction, and dynamic updates to the game state.
- **Bootstrap 5:** Ensuring a responsive and modern design.

## Future Enhancements

- **AI Opponent:** Implement a simple AI so players can compete against the computer.
- **Score Tracking:** Add a scoreboard to keep track of wins, losses, and draws.
- **Animations:** Add animations for winning moves and other game events.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. Contributions, issues, and feature requests are welcome!

## Acknowledgements

- Icons used in the game are provided by [Pixabay](https://pixabay.com/).
- This project was inspired by the classic Tic-Tac-Toe game, a staple of childhood games.

