import Phaser from 'phaser';

function preload() {
	this.load.spritesheet("knight_idle", "assets/sprite/dungeon_crawler/heroes/knight/knight_idle_spritesheet.png", {
		frameWidth: 16,
		frameHeight: 16
	});
	this.load.spritesheet("knight_run", "assets/sprite/dungeon_crawler/heroes/knight/knight_run_spritesheet.png", {
		frameWidth: 16,
		frameHeight: 16
	});
}

function create() {
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