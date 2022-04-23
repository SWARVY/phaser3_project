let gameSettings = {
	playerSpeed: 200,
	roll: 5000,
}

const config = {
    type: Phaser.AUTO,
    width: 928,
    height: 793,
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
