class Die {
    constructor() {
        this.value = value;
        this.createDiv = $("<div />");
        $("body").append(this.createDiv);
        this.roll();
    }
    roll() {
        this.value = (Math.floor(Math.random(this.value) * 6) + 1);
        this.createDiv.text(this.value);
    }
}

let dice = [];

$("#generateDie").click(function () {
     dice.push(new Die());
});

$("#rollDice").click(function () {
    for (let i = 0; i < dice.length; i++) {
        dice[i].roll();
    };
});


