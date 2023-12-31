
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// startKey
		const startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

		// gameOverLabel
		const gameOverLabel = this.add.text(250, 300, "", {});
		gameOverLabel.scaleX = 10;
		gameOverLabel.scaleY = 10;
		gameOverLabel.text = "Game Over\n";

		// continueButton
		const continueButton = this.add.text(219, 537, "", {});
		continueButton.scaleX = 5;
		continueButton.scaleY = 5;
		continueButton.text = "Press E to Continue.\n\n";

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

	update() {

		if(this.startKey.isDown)
		{
			this.scene.start("Play");
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
