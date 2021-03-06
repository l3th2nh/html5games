var Game = function(game){
    this.game = game;
    this.stage = 0;
    this.playing = true;
    this.idPerson = 0;
    this.idZombie = 0;
    this.score = 0;
    this.scoreText = null;
    this.roundText = null;
    this.groupZombies = null;
    this.groupPeople = null;
};

Game.prototype.preload = function(){
	
	
};

Game.prototype.create = function () {
	console.log("criando game");
	this.soundGame = this.game.add.audio('audioBackGroundGame');
	//this.soundGame.play();
	this.spriteCenario = this.game.add.sprite(0, 0,'cenario');
	this.spriteRound = this.game.add.sprite(100,0,'score');
	this.spriteRound = this.game.add.sprite(500,0,'round');
	
	//grupo de pessoas
    this.amountPeople = 0;
	this.groupPeople = this.game.add.group();
	
	 //grupo de zumbis
	this.amountZombies  = 0;
    this.groupZombies = this.game.add.group();
	this.groupZombies.enableBody = true;
	this.groupZombies.physicsBodyType = Phaser.Physics.ARCADE;
	
	this.groupGame = this.game.add.group();
	this.groupPeople.enableBody = true;
	this.groupPeople.physicsBodyType = Phaser.Physics.ARCADE;
	this.groupGame.add(this.groupZombies);
	this.groupGame.add(this.groupPeople);
	
	//Fonte
	this.stage = 0;
	this.scoreText = game.add.text(224, 28 , this.score,{ font: "25px arcade_normalregular", fill: "#ffffff", align: "right" });
	this.scoreText.setText(0);
	this.roundText = game.add.text(625,28,this.stage,{ font: "25px arcade_normalregular", fill: "#ffffff", align: "right" });
	this.roundText.setText(0);
};

Game.prototype.update = function () {
	//console.log("quantidade zumbis: ",this.amountZombies);
	
	//Colis�o
	this.game.physics.arcade.collide(this.groupZombies, this.groupPeople, this.collisionHandler, null, this);
	
	//IA do jogo
	if(this.amountZombies == 0){
		console.log("criando pessoas");
		this.amountPeople += 2;
		this.amountZombies += (this.amountPeople * 2);
		this.stage += 1;
		this.Stage();
		round = new Round(this.stage,this.amountZombies,this.amountPeople);
		this.game.time.events.repeat(Phaser.Timer.SECOND * 2, this.amountPeople, this.initPeople, this);
	}
	//this.game.physics.arcade.moveToObject(bullet, this.player, 500);
	this.groupZombies.forEach(function(zombie){
		if(zombie.body.y < 400)
		{
		    zombie.body.velocity.y  *= -1;
		}
	},this);
	
	this.groupPeople.forEach(function(people){
		if(people.body.y < 400)
		{
		    people.body.velocity.y  *= -1;
		}
	},this);
	
	this.groupZombies.sort('y', Phaser.Group.SORT_ASCENDING);
	this.groupPeople.sort('y', Phaser.Group.SORT_ASCENDING);
	this.groupGame.sort('y', Phaser.Group.SORT_ASCENDING);
	
};


Game.prototype.punctuate = function (points) {
	this.score += points;
    this.scoreText.setText(this.score);
};

Game.prototype.Stage = function () {
	console.log("stage ",this.stage);
    this.roundText.setText(this.stage);
};

Game.prototype.gameOver = function () {

};

Game.prototype.collisionHandler = function(zombie,person){
	console.log("colidiu");
	person.kill();
};

Game.prototype.initStage = function(){
	
};

Game.prototype.initPeople = function(amountPeople){
	console.log("initPeople");
		this.idPerson +=1;
			var person = new Person(this.idPerson,this.game);
			this.groupPeople.add(person.spritePerson);
			//Cada pessoa criada 2 novos zumbis s�o criados
			this.initZombies(person);
};

Game.prototype.initZombies = function(person){
	console.log("initZombie");
	this.idZombie += 1;
	for(var i = 0; i < 2 ; i++){
		var zombie = new Zombie(this.idZombie,this.game, person, this);
		this.groupZombies.add(zombie.spriteZombie);
	}
	//console.log("quantidade de zumbis no grupo",this.groupZombies.length);
};

Game.prototype.createZombie = function(person){
	
};
