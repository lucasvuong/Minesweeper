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
            if (typeof this.type == Number) {
                push();
                colorMode(HSB);
                fill(this.type * 36, 100, 100);
                textFont("Courier");
                textAlign(CENTER, CENTER);
                text(this.type, this.x + 20, this.y + 20);
                pop();
            }
        }
    }
}
