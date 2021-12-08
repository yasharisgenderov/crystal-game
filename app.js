class DomElements {
  blueStone = $("#blue");
  greenStone = $("#green");
  redStone = $("#red");
  yellowStone = $("#yellow");
  scorePanel = $("#your-score");
  targetPanel = $("#target-score");
  winPanel = $("#win-count");
  losePanel = $("#loss-count");
}

class CrystalGame extends DomElements {
  stone = {
    blue: {
      name: "Blue",
      value: 0,
    },
    green: {
      name: "Green",
      value: 0,
    },
    red: {
      name: "Red",
      value: 0,
    },
    yellow: {
      name: "Yellow",
      value: 0,
    },
  };
  myScore = 0;
  targetScore = 0;
  winCounter = 0;
  loseCounter = 0;

  constructor() {
    super();
  }

  randomFunc(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  valueFunc() {
    this.targetScore = this.randomFunc(19, 120);
    this.stone.blue.value = this.randomFunc(1, 12);
    this.stone.green.value = this.randomFunc(1, 12);
    this.stone.yellow.value = this.randomFunc(1, 12);
    this.stone.red.value = this.randomFunc(1, 12);
  }

  sumFunc(userCrystal) {
    this.myScore += userCrystal;
    if (this.myScore === this.targetScore) {
      this.resetGameFunc();
      this.targetScoreFunc();
      alert("You win");
      this.winCounter++;
      console.log("winCounter", this.winCounter);
      $(this.winPanel).text(this.winCounter);
    }
    if (this.myScore > this.targetScore) {
      this.resetGameFunc();
      this.targetScoreFunc();
      alert("You lose");
      this.loseCounter++;
      console.log("loseCounter", this.loseCounter);
      $(this.losePanel).text(this.loseCounter);
    }
  }

  targetScoreFunc() {
    this.targetScore = this.randomFunc(19, 120);
    $(crystalGame.targetPanel).text(crystalGame.targetScore);
  }

  resetGameFunc() {
    this.valueFunc();
    this.myScore = 0;
  }
}

let crystalGame = new CrystalGame();

crystalGame.valueFunc();

$(crystalGame.targetPanel).text(crystalGame.targetScore);

$(crystalGame.blueStone).on("click", function () {
  crystalGame.sumFunc(crystalGame.stone.blue.value);
  console.log(crystalGame.myScore);
  $(crystalGame.scorePanel).text(crystalGame.myScore);
});
$(crystalGame.greenStone).on("click", function () {
  crystalGame.sumFunc(crystalGame.stone.green.value);
  console.log(crystalGame.myScore);
  $(crystalGame.scorePanel).text(crystalGame.myScore);
});
$(crystalGame.redStone).on("click", function () {
  crystalGame.sumFunc(crystalGame.stone.red.value);
  console.log(crystalGame.myScore);
  $(crystalGame.scorePanel).text(crystalGame.myScore);
});
$(crystalGame.yellowStone).on("click", function () {
  crystalGame.sumFunc(crystalGame.stone.yellow.value);
  console.log(crystalGame.myScore);
  $(crystalGame.scorePanel).text(crystalGame.myScore);
});