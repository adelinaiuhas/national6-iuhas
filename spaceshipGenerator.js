console.log("Spaceship generator");

var newSpaceship;
document.getElementById("generate-spaceship").addEventListener("click", () => {
    console.log("generate Spaceship");
    newSpaceship = new Spaceship();
});

class Spaceship {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.generateHtmlRef();
        this.setMoveSpaceship();
    }

    generateHtmlRef() {
        this.ref = document.createElement("img");
        let myArray = ["green-spaceship.png", "blue-spaceship.png", "red-spaceship.png"];
        this.ref.src = myArray[Math.floor(Math.random() * myArray.length)];
        this.ref.classList.add("spaceship");
        document.body.appendChild(this.ref);
    }


    setMoveSpaceship() {
        document.addEventListener("keydown", (event) => {

            newSpaceship.moveSpaceship(event.key);
        });
    }

    moveSpaceship(direction) {

        if (direction === "ArrowRight") {
            this.x += 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        } else if (direction === "ArrowLeft") {
            this.x -= 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        } else if (direction === "ArrowDown") {
            this.y += 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        } else if (direction === "ArrowUp") {
            this.y -= 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    }
}
