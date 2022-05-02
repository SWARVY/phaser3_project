class Scene3 extends Phaser.Scene {
	constructor() {
		super("Game");
	}
	
	create() {		
		this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
		this.background.setOrigin(0, 0);
		this.add.text(20, 20, "Playing game", {
			font: "25px Arial", 
			fill: "yellow"
		});
		
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
	
	update() {
		this.background.tilePositionX += 0.2;
		this.playermanager();
	}
	
	playermanager() {
		//movement
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
		
		//shooting
		this.input.on('pointermove', function (pointer) {
			this.cursor = pointer;
			this.angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, this.cursor.x + this.cameras.main.scrollX, this.cursor.y + this.cameras.main.scrollY)
		}, this);
		
	}
	
}

//추후 코드분리할것
class Player {
	
}

class bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "bullet");
	}
}

class bulletGroup extends Phaser.Physics.Arcade.Group {
	constructor(scene) {
		super(scene.physics.world, scene);
		
		this.createMultiple({
			classType: Bullet,
			frameQuantity: 30,
			active: false,
			visible: false,
			key: "Bullet"
		});
	}
}