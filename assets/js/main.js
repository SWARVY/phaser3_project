let gameSettings = {
	playerSpeed: 200,
}

const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    pixelArt: true,
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	},
    scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);
