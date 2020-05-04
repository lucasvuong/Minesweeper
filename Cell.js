class Cell {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.clicked = false;
        this.flagged = false;
    }

    show() {
        if (!this.clicked) {
            fill(51);
            rect(this.x, this.y, 40, 40);
            if (this.flagged) {
                fill(194, 0, 0);
                rect(this.x + 10, this.y + 15, 5, 15);
                fill(255, 0, 0);
                triangle(
                    this.x + 10,
                    this.y + 10,
                    this.x + 30,
                    this.y + 15,
                    this.x + 10,
                    this.y + 20
                );
            }
        } else {
            if (this.type >= 1) {
                push();
                switch (this.type) {
                    case 1:
                        fill(0, 0, 255);
                        break;
                    case 2:
                        fill(0, 255, 0);
                        break;
                    case 3:
                        fill(255, 0, 0);
                        break;
                    case 4:
                        fill(0, 0, 255);
                        break;
                    case 5:
                        fill(185, 111, 237);
                        break;
                    case 6:
                        fill(165, 224, 242);
                        break;
                    case 7:
                        fill(0, 0, 0);
                        break;
                    case 8:
                        fill(99, 99, 99);
                        break;
                    case 9:
                        fill(255, 255, 255);
                        break;
                }
                textFont("Courier");
                textAlign(CENTER, CENTER);
                textSize(20);
                text(this.type, this.x + 20, this.y + 20);
                pop();
            } else if (this.type == -1) {
                push();
                fill(0);
                circle(this.x + 20, this.y + 20, 20);
                pop();
            }
        }
    }
}
