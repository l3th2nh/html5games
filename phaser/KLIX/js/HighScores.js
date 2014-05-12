HighScore = function (game) {
    this.game = game;
    this.screenName = 'creditScreen';
    this.image = 'assets/screenshots/btnscores2.png';
};

HighScore.prototype.preload = function () {
    game.load.image(this.screenName, this.image);
};

HighScore.prototype.create = function () {
    //var bg = game.add.sprite(120, 10, this.screenName);
    var bg = game.add.sprite(this.game.width / 2, 25, 'botoes', "btnScore_356-34.png");
    bg.anchor.setTo(0.5,0.5);
    game.add.text(this.game.width / 2 - 150, 100, localStorage["nameScore1"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 + 50, 100, localStorage["score1"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 - 150, 160, localStorage["nameScore2"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 + 50, 160, localStorage["score2"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 - 150, 220, localStorage["nameScore3"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 + 50, 220, localStorage["score3"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 - 150, 280, localStorage["nameScore4"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 + 50, 280, localStorage["score4"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 - 150, 340, localStorage["nameScore5"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });

    game.add.text(this.game.width / 2 + 50, 340, localStorage["score5"], {
        font: "40px Vector Battle", fill: "#ffffff", align: "center"
    });
		
    game.input.onDown.add(function() {
        var fadeout = game.add.tween(bg).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
        fadeout.onComplete.add(function() {
            game.state.start('menu', Menu);
        });
    });
    var keySelect = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	keySelect.onDown.add(function () {
		game.state.start('menu');
	});
};