
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
		const char = this.physics.add.image(536, 484, "guapen");
		char.setInteractive(new Phaser.Geom.Circle(104, 120, 104), Phaser.Geom.Circle.Contains);
		char.scaleX = 0.1;
		char.scaleY = 0.1;
		char.body.collideWorldBounds = true;
		char.body.setCircle(64);

		// charInput
		new charInput(char);

		// enemy
		const enemy = this.physics.add.image(907, 471, "guapen");
		enemy.setInteractive(this.input.makePixelPerfect());
		enemy.scaleX = 0.05;
		enemy.scaleY = 0.05;
		enemy.body.setSize(208, 240, false);

		this.char = char;
		this.enemy = enemy;
		this.sewers = sewers;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Image} */
	char;
	/** @type {Phaser.Physics.Arcade.Image} */
	enemy;
	/** @type {Phaser.Tilemaps.Tilemap} */
	sewers;

	/* START-USER-CODE */

	char_global = this.char;



	create() {

		this.editorCreate();
		this.sound.play("sound");
	}

	update()
	{
		this.physics.moveToObject(this.enemy, this.char, 100);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
