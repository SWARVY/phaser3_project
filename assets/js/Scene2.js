class Scene2 extends Phaser.Scene {
	constructor() {
		super("Preloader");
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
		this.load.spritesheet("crosshair", "assets/sprite/dungeon_crawler/ui/crosshair_3.png", {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.spritesheet("pistol", "assets/sprite/outlined_free/pistol10.png", {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.spritesheet("bullet", "assets/sprite/dungeon_crawler/props_items/barrel.png", {
			frameWidth: 16,
			frameHeight: 16
		});
	}
	
	create() {
		this.scene.start("Game");
	}
}