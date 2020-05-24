// is fired without waiting for load CSS or frames completely.
document.addEventListener('DOMContentLoaded', () => {
    const grid         = document.querySelector('.grid');
    let squares        = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn     = document.querySelector('#start-button');
    const width        = 10;

    // The Tetrominoes
    const lTetromino = [
        [1,     width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2,     width * 2 + 2],
        [1,     width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 * 2],
    ];

    const theTetrominoes = [lTetromino];

    let currentPosition = 4;
    let current         = theTetrominoes[0][0];

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino');
        });
        console.log(squares);
    }

    draw();
});
