var Menu = {};
var players = 0;
Menu = function (game) {
    this.game = game;
    this.btnPlay = null;
    this.btnHowToPlay = null;
    this.btnHighScores = null;
    this.btnCredits = null;
    this.msg = null;
    this.button = 0;
};

Menu.prototype.preload = function(){

    //game.stage.backgroundColor = '#111111';
    game.load.spritesheet('botoes', 'assets/screens/btns.png', 600, 72);
    game.load.image('title', 'assets/screens/menu.png');
		
};

Menu.prototype.create = function() {
	this.game.world.setBounds(0, 0, 800, 480);
    var fadeout;
    
    this.title = game.add.sprite(game.world.centerX,game.world.centerY, 'title');
    this.title.anchor.setTo(0.5,0.5);
    this.button = 1;
    this.btnPlay1 = game.add.button(game.world.centerX + 15, game.world.centerY + 30, 'botoes',
    function(){ this.play(1); }, this);
    this.btnPlay1.setFrames(0, 0);
    this.btnPlay1.anchor.x = 0.5;
    
    this.btnPlay2 = game.add.button(game.world.centerX + 15, game.world.centerY + 110, 'botoes',
    function(){ this.play(2); }, this);
    this.btnPlay2.setFrames(1, 1);
    this.btnPlay2.anchor.x = 0.5;

    this.btnCredits = game.add.button(game.world.centerX + 15, game.world.centerY + 190, 'botoes',
    function(){ this.credits(); }, this);
    this.btnCredits.setFrames(2, 2);
    this.btnCredits.anchor.x = 0.5;
};

Menu.prototype.play = function (p) {
    this.fadeOut();
    players = p;
    fadeout.onComplete.add(function () {
    	game.state.start('game');
    });
};

Menu.prototype.credits = function () {
    this.fadeOut();
    fadeout.onComplete.add(function () {
        this.game.state.start('credits');
    });
};

Menu.prototype.fadeOut = function () {
	fadeout = game.add.tween(this.title).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true)
										.to({ x: 1500 }, 1, Phaser.Easing.Linear.None, true, 0, 0, true);
    fadeout = game.add.tween(this.btnPlay1).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true)
    									  .to({ x: 1500 }, 1, Phaser.Easing.Linear.None, true, 0, 0, true);
    fadeout = game.add.tween(this.btnPlay2).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true)
	  .to({ x: 1500 }, 1, Phaser.Easing.Linear.None, true, 0, 0, true);
    fadeout = game.add.tween(this.btnCredits).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, true)
    										 .to({ x: 1500 }, 1, Phaser.Easing.Linear.None, true, 0, 0, true);
};