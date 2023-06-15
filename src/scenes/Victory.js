
// You can write more code here

/* START OF COMPILED CODE */

class Victory extends Phaser.Scene {

	constructor() {
		super("Victory");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// restart
		const restart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

		// text_1
		const text_1 = this.add.text(143, 292, "", {});
		text_1.scaleX = 3;
		text_1.scaleY = 3;
		text_1.text = "Victory!\n\nPress E to return to the main menu";

		this.restart = restart;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	restart;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update()
	{
		if(this.restart.isDown)
		{
			this.scene.start("Menu");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
