let board = [];

function setup() {
    createCanvas(400, 400);
    for (let r = 0; r < 10; r++) {
        board[r] = [];
        for (let c = 0; c < 10; c++) {
            board[r][c] = new Cell(r * 40, c * 40, 0);
        }
    }
    for (let i = 0; i < 11; i++) {
        let bombCellPos = [
            floor(random(board.length)),
            floor(random(board.length)),
        ];
        while (board[bombCellPos[0]][bombCellPos[1]].type == -1) {
            bombCellPos = [
                floor(random(board.length)),
                floor(random(board.length)),
            ];
        }
        board[bombCellPos[0]][bombCellPos[1]].type = -1;
        add1toNeighbors(bombCellPos[0], bombCellPos[1]);
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
                if (element.type == -1) {
                    noLoop();
                    board.forEach((element) => {
                        element.forEach((element) => {
                            if (element.type == -1) {
                                element.clicked = true;
                            }
                        });
                    });
                    alert("Game Over");
                } else if (element.type == 0) {
                    openNeighbors(element.x / 40, element.y / 40);
                }
                return;
            }
        });
    });
}

function add1toNeighbors(x, y) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i + x >= 0 && i + x < 10 && j + y >= 0 && j + y < 10) {
                if (board[i + x][j + y].type > -1 && !(i == 0 && j == 0)) {
                    board[i + x][j + y].type++;
                }
            }
        }
    }
}

function openNeighbors(x, y) {
    if (board[x][y].type > 0) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i + x < 0 || i + x >= 10 || j + y < 0 || j + y >= 10) {
                    return;
                }
            }
        }
    }
    if (board[x][y].type == 0) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i + x >= 0 && i + x < 10 && j + y >= 0 && j + y < 10) {
                    if (!board[i + x][j + y].clicked) {
                        if (board[i + x][j + y].type == 0) {
                            board[i + x][j + y].clicked = true;
                            openNeighbors(i + x, j + y);
                        } else if (board[i + x][j + y].type > 0) {
                            board[i + x][j + y].clicked = true;
                        }
                    }
                }
            }
        }
    } else if (board[x][y].type > 0) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (board[i + x][j + y].type > -1 && (i == 0 || j == 0)) {
                    board[i + x][j + y].clicked = true;
                    openNeighbors(i + x, j + y);
                }
            }
        }
    }
}
