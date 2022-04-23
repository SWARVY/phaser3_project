class Scene1 extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}
	
	preload() {
		this.load.image("background", "assets/sprite/Forest/Preview/Background.png");
		
		this.load.spritesheet("knight_idle", "assets/sprite/FreeKnight_v1/120x80_spritesheets/_Idle.png", {
			frameWidth: 120,
			frameHeight: 80 
		});
		this.load.spritesheet("knight_attack1", "assets/sprite/FreeKnight_v1/120x80_spritesheets/_Attack1.png", {
			frameWidth: 120,
			frameHeight: 80 
		});
		this.load.spritesheet("knight_run", "assets/sprite/FreeKnight_v1/120x80_spritesheets/_Run.png", {
			frameWidth: 120,
			frameHeight: 80 
		});
		this.load.spritesheet("knight_roll", "assets/sprite/FreeKnight_v1/120x80_spritesheets/_Roll.png", {
			frameWidth: 120,
			frameHeight: 80 
		});
	}
	
	create() {
		this.add.text(20, 20, "Loading game...");
		this.scene.start("playGame");
		
		this.anims.create({
			key: "knight_idle",
			frames: this.anims.generateFrameNumbers("knight_idle"),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: "knight_Attack1",
			frames: this.anims.generateFrameNumbers("knight_attack1"),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: "knight_Run",
			frames: this.anims.generateFrameNumbers("knight_run"),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: "knight_Roll",
			frames: this.anims.generateFrameNumbers("knight_roll"),
			frameRate: 10,
			repeat: 1
		});
	}
}