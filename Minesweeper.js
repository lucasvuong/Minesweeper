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
        random(random(board)).type = "bomb";
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
