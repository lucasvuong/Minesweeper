let board = [];

function setup() {
    createCanvas(400, 400);
    for (let r = 0; r < 10; r++) {
        board[r] = [];
        for (let c = 0; c < 10; c++) {
            board[r][c] = new Cell(r * 40, c * 40, "nothing");
        }
    }
    for (let i = 0; i < 11; i++) {
        random(random(board)).type = -1;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (countBombNeighbors(i, j) > 0) {
                board[i][j].type = countBombNeighbors(i, j);
            }
        }
    }
}

function draw() {
    background(200);
    board.forEach((element) => {
        element.forEach((element) => {
            element.show();
        });
    });
}

function mousePressed() {
    board.forEach((element) => {
        element.forEach((element) => {
            if (
                element.x <= mouseX &&
                element.x + 40 >= mouseX &&
                element.y <= mouseY &&
                element.y + 40 >= mouseY
            ) {
                element.clicked = true;
                return;
            }
        });
    });
}

function countBombNeighbors(x, y) {
    let bombNeighbors = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i + x >= 0 && i + x < 10 && j + y >= 0 && j + y < 10) {
                if (board[i + x][j + y].type == -1) {
                    bombNeighbors++;
                }
            }
        }
    }
    if (board[x][y].type == -1) {
        bombNeighbors--;
    }
    return bombNeighbors;
}
