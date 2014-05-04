var Game = function()
{
this.sprite;// mudar depois pra uma classe Player.
this.gravity = 1000;
this.upSpeed = 80;
this.frontGround;
this.frontGround2;
this.fire1;
}

Game.prototype.preload = function()
{
	game.load.spritesheet('playerOne','assets/spritesheets/playerOne.png',154,56,5);
	game.load.image('bg','assets/tileSprites/background.png');
	game.load.image('fg','assets/tileSprites/frontGround.png')
	game.load.image('fg2','assets/tileSprites/frontGround2.png');
	game.load.spritesheet('fire1','assets/spritesheets/fireYelow.png',154,56,3);
}

Game.prototype.create = function()
{
	game.physics.startSystem(Phaser.Game.ARCADE);
	game.physics.arcade.gravity.y = this.gravity;
	
	game.add.sprite(0,0,'bg')
	this.frontGround2 = game.add.tileSprite(0,game.world.height-99,960,99,'fg2');
	this.frontGround = game.add.tileSprite(0,game.world.height-35,960,35,'fg');

	this.sprite = game.add.sprite(350,200,'playerOne');
	this.sprite.anchor.setTo(0.7,0.6);
	game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
	this.sprite.body.collideWorldBounds = true;
	this.sprite.body.setSize(90,25,10,0); 
	this.sprite.animations.add('flying',[0,1,2,3,4,3,2,1,0],5,true);
	this.sprite.animations.play('flying');

	this.fire1 = game.add.sprite(this.sprite.x, this.sprite.y, 'fire1');
	this.fire1.anchor.setTo(0.7,0.6);
	game.physics.enable(this.fire1, Phaser.Physics.ARCADE); // abilita a fisica no fogo p/ ele poder acompanhar o personagem
	this.fire1.body.collideWorldBounds = true;
	this.fire1.animations.add('flying',[0,1,2,1],15,true);
	this.fire1.animations.play('flying');
}

Game.prototype.update = function()
{	
	this.fire1.angle = this.sprite.angle;
	//this.fire1.x = this.sprite.x;
	//this.fire1.y = this.sprite.y;

	this.frontGround2.tilePosition.x -= 15;
	this.frontGround.tilePosition.x -= 40;
	if (game.input.activePointer.isDown)
	{
	this.sprite.body.velocity.y -= this.upSpeed;
	this.fire1.body.velocity.y -= this.upSpeed;
	}
	this.sprite.angle = this.sprite.body.velocity.y * 0.02
	this.fire1.angle = this.fire1.body.velocity.y * 0.02
}

Game.prototype.render = function()
{
	//game.debug.body(this.sprite);
}