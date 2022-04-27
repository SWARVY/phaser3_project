class Player {
	constructor() {
		// this.scene = scene;
		// const anims = scene.anims;
		
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
		
		this.player = this.physics.add.sprite(config.width / 2 - 50, config.height / 2, "knight_idle").setScale(4);
		this.player.play("knight_Idle");
		this.player.setCollideWorldBounds(true);
		
		this.cursorKeys = this.input.keyboard.createCursorKeys();
		// this.Spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	}
}

function update() {
	if(this.cursorKeys.left.isDown) {
		this.check_x = 1;
		this.player.flipX = true;
		this.player.setVelocityX(-gameSettings.playerSpeed);
		this.player.anims.play("knight_Run", true);
	}else if(this.cursorKeys.right.isDown) {
		this.check_x = 1;
		this.player.flipX = false;
		this.player.setVelocityX(gameSettings.playerSpeed);
		this.player.anims.play("knight_Run", true);
	}else {
		this.check_x = 0;
		this.player.setVelocityX(0);
	}
		
	if(this.cursorKeys.up.isDown) {
		this.check_y = 1;
		this.player.setVelocityY(-gameSettings.playerSpeed);
		this.player.anims.play("knight_Run", true);
	}else if(this.cursorKeys.down.isDown) {
		this.check_y = 1;
		this.player.setVelocityY(gameSettings.playerSpeed);
		this.player.anims.play("knight_Run", true);
	}else {
		this.check_y = 0;
		this.player.setVelocityY(0);
	}
		
	if(this.check_x === 0 && this.check_y === 0) {
		this.player.anims.play("knight_Idle", true);
	}
}