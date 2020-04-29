class Cell {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.clicked = false;
    }

    show() {
        if (!this.clicked) {
            fill(51);
            rect(this.x, this.y, 40, 40);
        } else {
            if (!isNaN(this.type) && this.type >= 1) {
                push();
                colorMode(HSB);
                fill(this.type * 36, 100, 100);
                //textFont("Courier");
                //textAlign(CENTER, CENTER);
                //textSize(40);
                text(this.type, this.x + 20, this.y + 20);
                pop();
            } else if (this.type == "bomb") {
                push();
                fill(0);
                circle(this.x + 20, this.y + 20, 20);
                pop();
            }
        }
    }
}
