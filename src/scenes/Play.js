
var enemies_global;
var player_global;
var self_global;
var nosferatu_global;
var orb_global;
var orbMoving
var nosferatuHealth;

/* START OF COMPILED CODE */

class Play extends Phaser.Scene {

	constructor() {
		super("Play");

		/* START-USER-CTR-CODE */
		this.enemySpeed = 50;
		orbMoving = false;
		nosferatuHealth = 100;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sewers
		const sewers = this.add.tilemap("sewers");
		sewers.addTilesetImage("sewer_tileset", "sewer_tileset");

		// fire
		const fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// bottom_1
		sewers.createLayer("Bottom", ["sewer_tileset"], 0, 0);

		// player
		const player = new Char(this, 612, 418);
		this.add.existing(player);

		// enemy
		const enemy = this.physics.add.image(0, 0, "guapen");
		enemy.scaleX = 0.05;
		enemy.scaleY = 0.05;
		enemy.tintFill = true;
		enemy.tintTopLeft = 12854015;
		enemy.tintTopRight = 12854015;
		enemy.tintBottomLeft = 12854015;
		enemy.tintBottomRight = 12854015;
		enemy.body.setSize(208, 240, false);

		// health
		const health = this.add.text(1091, 24, "", {});
		health.text = "Health: 0";

		// orb
		const orb = this.physics.add.image(1662, 572, "guapen");
		orb.scaleX = 0.05;
		orb.scaleY = 0.05;
		orb.tintFill = true;
		orb.tintTopLeft = 13963023;
		orb.tintTopRight = 8456200;
		orb.tintBottomLeft = 11602442;
		orb.tintBottomRight = 9897478;
		orb.body.setSize(208, 240, false);

		// nosferatu
		const nosferatu = this.physics.add.image(0, 0, "down");
		nosferatu.tintFill = true;
		nosferatu.tintTopLeft = 12435977;
		nosferatu.tintTopRight = 14225681;
		nosferatu.tintBottomLeft = 16415097;
		nosferatu.tintBottomRight = 15859712;
		nosferatu.body.setSize(14, 22, false);

		// lists
		const enemies = [enemy];

		// collider
		const collider = this.physics.add.overlap(player, enemies, this.enemyHit);

		// collider_1
		this.physics.add.collider(orb, nosferatu, this.nosferatuHit);

		this.player = player;
		this.health = health;
		this.orb = orb;
		this.nosferatu = nosferatu;
		this.sewers = sewers;
		this.collider = collider;
		this.fire = fire;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Char} */
	player;
	/** @type {Phaser.GameObjects.Text} */
	health;
	/** @type {Phaser.Physics.Arcade.Image} */
	orb;
	/** @type {Phaser.Physics.Arcade.Image} */
	nosferatu;
	/** @type {Phaser.Tilemaps.Tilemap} */
	sewers;
	/** @type {Phaser.Physics.Arcade.Collider} */
	collider;
	/** @type {Phaser.Input.Keyboard.Key} */
	fire;
	/** @type {Phaser.Physics.Arcade.Image[]} */
	enemies;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.sound.play("sound");
		enemies_global = this.enemies;
		player_global = this.player;
		nosferatu_global = this.nosferatu;
		nosferatu_global.setX(Phaser.Math.Between(0,1260));
		nosferatu_global.setY(Phaser.Math.Between(0,726));
		enemies_global.forEach(item => item.setX(nosferatu_global.x), item => item.setY(nosferatu_global.y));
		orb_global = this.orb;
		nosferatuHealth = 100;
	}
	update() {
		this.player.update();
		if(this.enemies.length > 0)
		{
			this.enemies.forEach(item => this.physics.moveToObject(item, this.player, this.enemySpeed));
		}
		if(orbMoving == true)
		{
			this.physics.moveToObject(this.orb, nosferatu_global, 500);
		}
		else
		{
			this.orb.setVelocityX(0);
			this.orb.setVelocityY(0);
		}
		this.physics.moveTo(nosferatu_global, Phaser.Math.Between(0, 1260), Phaser.Math.Between(0, 726), 60, 0);
		this.health.text = "Health: " + this.player.health;


		if (this.player.health <= 0)
		{
			this.scene.start("GameOver");
		}
		if(this.fire.isDown && !orbMoving)
		{
			orb_global.setX(this.player.x);
			orb_global.setY(this.player.y);
			orbMoving = true;
		}
		if(nosferatuHealth <= 0)
		{
			this.scene.start("Victory");
		}
	}

	enemyHit()
	{
		enemies_global.forEach(item => item.setX(nosferatu_global.x), item => item.setY(nosferatu_global.y));
		player_global.health -= 1;


	}

	nosferatuHit()
	{
		orb_global.setX(-100);
		orb_global.setY(-100);
		orbMoving = false;
		orb_global.setVelocityX(0);
		orb_global.setVelocityY(0);
		nosferatuHealth-=1;

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
