class Scene1 extends Phaser.Scene {
	constructor() {
		super("Boot");
	}
	
	preload() {
		//
	}
	
	create() {
		this.scene.start("Preloader");
	}
}