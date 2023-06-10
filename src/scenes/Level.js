
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sewers
		const sewers = this.add.tilemap("sewers");
		sewers.addTilesetImage("sewer_tileset", "sewer_tileset");

		// map
		sewers.createLayer("Bottom", ["sewer_tileset"], 0, 0);

		// char
		const char = this.physics.add.image(508, 484, "guapen");
		char.setInteractive(new Phaser.Geom.Circle(104, 120, 104), Phaser.Geom.Circle.Contains);
		char.scaleX = 0.1;
		char.scaleY = 0.1;
		char.body.collideWorldBounds = true;
		char.body.setCircle(64);

		// charInput
		new charInput(char);

		this.sewers = sewers;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	sewers;

	/* START-USER-CODE */

	// Write your code here



	create() {

		this.editorCreate();
		this.sound.play("sound");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
