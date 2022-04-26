class Scene1 extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}
	
	preload() {
		this.load.image("background", "assets/sprite/bg.png");
		this.load.spritesheet("knight_idle", "assets/sprite/dungeon_crawler/heroes/knight/knight_idle_spritesheet.png", {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.spritesheet("knight_run", "assets/sprite/dungeon_crawler/heroes/knight/knight_run_spritesheet.png", {
			frameWidth: 16,
			frameHeight: 16
		});
	}
	
	create() {
		this.add.text(20, 20, "Loading game...");
		this.scene.start("playGame");
		
		this.anims.create({
			key: "knight_Idle",
			frames: this.anims.generateFrameNumbers("knight_idle"),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: "knight_Run",
			frames: this.anims.generateFrameNumbers("knight_run"),
			frameRate: 10,
			repeat: -1
		});
	}
}