class Scene2 extends Phaser.Scene {
	constructor() {
		super("playGame");
	}
	
	create() {		
		this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
		this.background.setOrigin(0, 0);
		
		this.player = this.physics.add.sprite(config.width / 2 - 50, config.height / 2, "knight_idle").setScale(2);
		// this.player.animations.add("knight_attack1");
		// this.player.animations.add("knight_run");
		// this.player.animations.add("knight_roll");
		
		this.player.play("knight_Idle");
		this.player.setCollideWorldBounds(true);
		this.cursorKeys = this.input.keyboard.createCursorKeys();
		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		
		this.add.text(20, 20, "Playing game", {
			font: "25px Arial", 
			fill: "yellow"
		});
	}
	
	update() {
		this.background.tilePositionX += 0.2;
		this.movePlayerManager();
	}
	
	movePlayerManager() {
		if(this.cursorKeys.left.isDown) {
			this.player.flipX = true;
			this.player.setVelocityX(-gameSettings.playerSpeed);
			this.player.anims.play("knight_Run", true);
		}else if(this.cursorKeys.right.isDown) {
			this.player.flipX = false;
			this.player.setVelocityX(gameSettings.playerSpeed);
			this.player.anims.play("knight_Run", true);
		}else {
			this.player.setVelocityX(0);
			this.player.anims.play("knight_Idle", true);
		}
	}
}