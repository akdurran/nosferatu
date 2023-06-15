
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

		// gameOverLabel
		const gameOverLabel = this.add.text(250, 300, "", {});
		gameOverLabel.scaleX = 10;
		gameOverLabel.scaleY = 10;
		gameOverLabel.text = "Game Over\n";

		// continueButton
		const continueButton = this.add.text(440, 537, "", {});
		continueButton.scaleX = 5;
		continueButton.scaleY = 5;
		continueButton.text = "Continue?\n\n";

		// pushActionScript
		new PushActionScript(continueButton);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
