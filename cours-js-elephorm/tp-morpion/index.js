
const game = document.querySelector('#game');
const board = [
    [0, 1, 0],
    [0, 0, 0],
    [2, 0, 0],
]

let player = 1;

const cleanBoard = () => {
    while (game.firstChild) 
        game.removeChild(game.firstChild);
}


const generateBoard = board => { 
    cleanBoard(board);

    board.forEach((line, lineIndex) => { 
        const lineDiv = document.createElement('div');
        
        lineDiv.classList.add('line');

        line.forEach((value, squareIndex) => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.state = value;
            // square.dataset.line = lineIndex;
            // square.dataset.square = squareIndex;
            // square.addEventListener('click', handleClick);
            // lineDiv.appendChild(square);
        })
    })

}

generateBoard(board);