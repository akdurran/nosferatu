
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
		const start = this.add.text(418, 371, "", {});
		start.text = "Nosferatu\n\nWASD to move. Space to fire homing sphere.\n\nPress E to start.";

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
