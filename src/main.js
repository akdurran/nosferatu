

/* 
Areeb Durrani
Nosferatu (1922)
Scene 1: Hutter's Journey to Count Orlok's Castle
In this scene, the protagonist, Hutter, embarks on a long and treacherous journey to Count Orlok's
castle, situated in the remote Carpathian Mountains. As Hutter traverses eerie landscapes and
encounters supernatural signs, a sense of impending doom and isolation builds up. This scene
establishes the theme of venturing into the unknown and the protagonist's gradual descent into
darkness.
Significance to the Film's Themes: The scene highlights the theme of curiosity and the consequences of
delving too deep into the mysteries of the world. Hutter's journey represents mankind's inherent desire
to explore and understand the supernatural, despite the dangers it poses. It also foreshadows the
intrusion of evil forces into the protagonist's life and the disruption of the ordinary world.
Video Game Adaptation: A video game adaptation of this scene could focus on Hutter's journey through
perilous landscapes. Players would navigate treacherous terrains, encounter supernatural obstacles, and
solve puzzles to progress. The game would emphasize the atmosphere of suspense and isolation, with
dynamic weather changes and haunting visuals. The choices players make during the journey could
affect the unfolding of the story and determine Hutter's fate.
Scene 2: Count Orlok's Shadow Creeping Up the Stairs
In this iconic scene, Count Orlok's sinister shadow slowly ascends the staircase leading to the
unsuspecting Ellen's room. The elongated shadow adds an element of terror, with each step heightening
the tension. The scene symbolizes the encroachment of evil and the impending threat it poses to
innocence.
Significance to the Film's Themes: This scene represents the invasion of darkness and corruption into
the realm of purity and light. It highlights the theme of vulnerability and the gradual seduction of
innocence. The creeping shadow serves as a metaphor for the insidious nature of evil, gradually
permeating the lives of the characters and disrupting their sense of safety.
Video Game Adaptation: A video game adaptation of this scene could place players in the role of Ellen,
the character whose room is being invaded by Count Orlok's shadow. Players would navigate through a
claustrophobic, dimly lit environment, attempting to evade the shadow's reach. The game could
incorporate stealth mechanics, requiring players to carefully time their movements to avoid detection.
The scene's significance to the story's themes would be enhanced through atmospheric visuals,
haunting sound design, and tense gameplay mechanics.
Scene 3: Count Orlok's Demise
In the film's climactic scene, Count Orlok is confronted with the power of sunlight as he attempts to
claim his final victim. As the first rays of dawn break, Orlok disintegrates into dust, defeated by the
forces of purity and light. This iconic moment represents the triumph of good over evil and the ultimate
destruction of the supernatural menace.
Significance to the Film's Themes: The scene underscores the theme of the struggle between darkness
and light, illustrating the triumph of morality and the inherent power of goodness. It symbolizes the
eradication of evil and the restoration of balance in the world. Count Orlok's demise highlights the
consequences of succumbing to temptation and the redemptive power of sacrifice.
Video Game Adaptation: A video game adaptation of this scene could offer players the opportunity to
face off against Count Orlok in a climactic boss battle. Players would control a protagonist armed with
the knowledge of Orlok's vulnerability to sunlight. The gameplay would require strategic positioning,
timing, and clever use of environmental elements to expose Orlok to sunlight and weaken him. The
scene's significance would be reinforced through intense action sequences, dynamic lighting effects,
and a sense of triumph upon defeating the vampire.
Annotations
*/

var char_global;
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics:
		{
			default: 'arcade'
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}