
// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// startKey
		const startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

		// start
		const start = this.add.text(6, 371, "", {});
		start.scaleX = 0.9566787934135329;
		start.scaleY = 0.8155172074116247;
		start.text = "Nosferatu\n\nWASD to move. Space to fire homing sphere.\nYou must dodge Nosferatu's homing spheres.\n\nPress E to start.\n\nNosferatu's Spheres have been significantly slowed down, and the player's spheres have been significantly sped up, for testing purposes. \nAt reasonable speeds the game would be very difficult, requiring precise movements to avoid the spheres.";

		this.startKey = startKey;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	startKey;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update()
	{
		if(this.startKey.isDown)
		{
			this.scene.start("Play");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
