// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>El mito de la caberna</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Te encuentras desorientado, tirado en el suelo de una fría caverna,\
		sintiendo la humedad de la tierra calarte hasta los huesos. A tu alrededor,\
		sentados en fila ves la silueta de otras personas, encadenadas al igual que tú,\
		de pies y manos a la pared que tienes a tus espaldas. Tus ojos se han acostumbrado\
		a esa penumbra pero en un momento inesperado unas sobras empiezan a desfilar sobre\
		la pared que tenéis enfrente, no entiendes nada pero las formas de esas sombras\
		te resultan familiares.</p>\
        \
        <p class='transient'> <a href='start'>Seguir mirando las sombras </a></p>\
		<p class='transient'> <a href='encontrar'>Observas tu entorno </a></p>\
		<p class='transient'> <a href='hablar'>Intenta hablar con las demás personas </a></p>"
    ),
	start2: new undum.SimpleSituation(
        "<p>Te encuentras desorientado, tirado en el suelo de una fría caverna,\
		sintiendo la humedad de la tierra calarte hasta los huesos. A tu alrededor,\
		sentados en fila ves la silueta de otras personas, encadenadas al igual que tú,\
		de pies y manos a la pared que tienes a tus espaldas. Tus ojos se han acostumbrado\
		a esa penumbra pero en un momento inesperado unas sobras empiezan a desfilar sobre\
		la pared que tenéis enfrente, no entiendes nada pero las formas de esas sombras\
		te resultan familiares.</p>\
        \
        <p class='transient'> <a href='start'>Seguir mirando las sombras </a></p>\
		<p class='transient'> <a href='encontrar'>Observas tu entorno </a></p>\
		<p class='transient'> <a href='hablar'>Intenta hablar con las demás personas </a></p>"
    ),
	encontrar: new undum.SimpleSituation(
		"<p>Comienzas a mirar a tu alrededor, intentando encontrar alguna salida, algo\
		que no sean las paredes de la cueva o las sombras que te proyectan desde tu espalda.\
		Casi sin esperanzas bajas tu mirada a tus pies, descalzos y encadenados y de repente\
		algo semi enterrado comienza a relucir.</p>\
		<p class='transient'><a href='llave'>Desentierras el objeto con tus manos</a></p>\
		<p class='transient'><a href='start2'>Pierdes toda esperanza de escapar y sigues mir\
		ando fijamente a las sombras de tu mundo.</a></p>"
		
	),
	llave: new undum.SimpleSituation(
		"<p>Resulta ser una llave, la llave\
		que te permitirá librarte de los grilletes que te atan a esa pared.</p>\
		<p>Comienzas a mirar a tu alrededor, aterrado con la idea de que nadie  te hace caso,\
		o que no te entienden o que quizás ni siquiera deseen hacerlo, estás solo, solo en la\
		inmensidad de una cueva oscura, sin saber cómo has llegado hay y lo peor de todo,\
		con la sensación de que no deseas salir de hay, pero tienes una llave, ella puede\
		ser tu salvación o tu ruina y es el momento de decidir qué es lo que debes hacer.</p>\
		\
		<p class='transient'> <a href='escapas'>Usar la llave para abrir los grilletes </a></p>\
		<p class='transient'> <a href='resignado'>resignarte a que en la cueva no estas tan mal y rendirte </a></p>\
		<p class='transient'> <a href='ellos'>Intentar contarles a los demás que tienes una llave\
		y que puedes liberarlos a todos.</a></p>"
	),
	hablar: new undum.SimpleSituation(
		"<p>Tus intentos de comunicarte con tus compañeros son en vano, todos están\
		mirando fijamente a las sombras y ninguno hace el más mínimo esfuerzo en prestarte\
		atención. Tras unos momentos intentando con más énfasis decides desistir e intentar\
		buscar otra manera para <a href='start2'>cambiar tu situación</a></p>"
	),
	resignado: new undum.SimpleSituation(
		"<p>Resignado a que tu vida no va a cambiar y que esa cueva va a ser tu hogar\
		el resto de tu vida, decides dejar la llave donde la encontraste, olvidar el\
		recuerdo de que esta misma existía y seguir mirando las sombras que dibujaran\
		tu nuevo mundo.</p>\
		\
		\<p>The end</p>"
	),
	ellos: new undum.SimpleSituation(
		"<p>Aunque tus esfuerzos fueron en vano, no quieres rendirte, quieres \
		buscar una salida con todos ellos, tienes la esperanza de que al verse\
		libre de las cadenas ellos también se animaran a salir. Pero todas tus\
		esperanzas se alejaban de la cruda realidad, al ver que estás libre de\
		las cadenas, no hacen más que gritar y asustarse, te acercas a ellos para\
		intentar calmarlos y liberarlos de sus cadenas, pero ellos comienzan a\
		golpearte con las cadenas hasta que acaban con tu vida, como animales\
		asustados y heridos los cuales no querían conocer ningún mundo diferente\
		a su mundo de sombras`.</p>\
		<p>The end</p>"
	),
	escapas: new undum.SimpleSituation(
		"<p>Sin grilletes, sin compañeros y sin conocer el futuro que te depara,\
		decides adentrarte en la cueva y descubrir sus secretos. Lo primero que\
		descubres es de donde viene las sombras que llevan siendo tu mundo desde\
		que despertastes en la cueva, estas procedían de objetos que pasaban por\
		delante de una hoguera, la cual generaba las sombras con su luz, entiendes\
		porque los objetos que pasaban ante ti te eran conocidos, todos eran objetos\
		cotidianos solo que estaban puestos sobre un cinta que hacía que se moviesen.\
		Ves una puerta que lleva a un pasillo lleno de antorchas, decides que es el \
		momento, nada te queda en el interior de esa habitación llena de sombras para \
		desear quedarte y comienzas a caminar por el pasillo. Al principio todo está\
		iluminado por antorchas, pero conforme sigues avanzando te das cuenta de que\
		la separación entre antorcha y antorcha se separa mas y mas.</p>\
		\
		<p class='transient'> <a href='antorcha'>resignarte a que en la cueva no estas tan mal y rendirte </a></p>\
		<p class='transient'> <a href='noantorcha'>No coges antorcha, no crees que vaya a dejar de haber luz</a></p>"
	),
	noantorcha: new undum.SimpleSituation(
		"<p>La oscuridad es cada vez mas y mas intensa, ya no consigues ni distinguir las paredes de la cueva,\
		te cuesta mas y mas caminar hasta que llegas al punto de desfallecer, aquí acaba tu camino, huistes de las\
		sombras de la cueva, buscando una luz distinta con la que guiarte y al final solo sombras te rodean,\
		cada vez tienes más frío y estás más cansado, hasta que por fin cierras los ojos, para no abrirlos\
		nunca más.</p>\
		\
		<p>The end</p>"
	),
	antorcha: new undum.SimpleSituation(
		"<p>caminas tranquilamente por el pasillo, comienzas a darte cuenta de que el pasillo no es tan recto\
		como parece, se inclina un poco hacia arriba, lo que te hace pensar que la salida podría estar por\
		encima de ti. En un momento recorriendo este pasillo descubres unas escaleras esculpidas en el lateral\
		de la pared, comienzas a subirlas con cuidado ya que son estrechas y no puedes verlas bien aun teniendo\
		la antorcha. tras subirlas te encuentras con una encrucijada, es el momento de decidir por dónde\
		continuará tu camino.</p>\
		\
		<p class='transient'> <a href='izquierda'>Camino de la izquierda</a></p>\
		<p class='transient'> <a href='derecha'>Camino de la derecha</a></p>"
		
	),
	izquierda: new undum.SimpleSituation(
		"<p>Al dar los primeros pasos por el pasillo de la izquierda comienzas a notar\
		una pequeña brisa, el aire parece más fácil de respirar cuanto más avanzas por\
		el pasillo, tus esperanzas parecen dar sus frutos y al final del pasillo\
		ves una luz, desde lejos no sabrías distinguir si es de una antorcha o de\
		una salida de ese infierno, pero tú avanzas con paso firme y decidido hasta\
		el final. Estando a unos escasos 20 pasos de la salida, con los ojos doloridos\
		de la luz que entraba por la entrada de la cueva, decides echar un último vistazo\
		hacia la cueva, desde tu posición, no parece tan oscura y fría como sabes que es,\
		pero piensas que es mejor no mirar atrás y decides seguir hasta en final de tu camino,\
		sueltas la antorcha en el suelo y comienzas a correr con las pocas fuerzas que te quedan.\
		Una vez fuera, tus ojos tardan unos minutos en adaptarse a la luz del sol, el mundo de\
		fuera era muy diferente a las sombras en las que habías vivido, tienes miedo, pero ya\
		eres libre, estás fuera y nada puede cambiar eso. Por tu mente pasan miles de ideas,\
		tu curiosidad te invade y deseas descubrir este nuevo mundo que se abre ante tus ojos,\
		pero por un instante piensas en tus compañeros de cautiverio, ellos también podrían\
		disfrutar de este mundo, lejos de las sombras de esa caverna. Durante un instante dudas,\
		¿debería volver dentro y salvarlos a todos?</p>\
		<p class='transient'> <a href='end'>Decides que no merece la pena volver atrás y sigues tu\
		camino hasta el nuevo mundo</a></p>\
		<p class='transient'> <a href='hablar'>Vuelves al interior de la caverna, recorriendo todo\
		el camino que has hechopara subir y salvas al resto de personas del interior de la caverna. </a></p>"
	),
	derecha: new undum.SimpleSituation(
		"<p>Decides ir el por camino de la derecha, tiene la misma estructura que el resto de la cueva,\
		un pasillo largo y oscuro, pero al poco tiempo encuentras una puerta, tiene dos antorchas en cada\
		lado de la misma y un símbolo extraño grabado en el centro, no sabrías distinguir que es, así\
		que decides acercarte un poco mas y verlo más de cerca. Tras unos pasos empiezas a escuchar\
		un ruido que proviene del otro lado de la puerta. La curiosidad te pica y te acercas más a\
		la puerta con intención de abrirla.</p>\
		\
		<p class='transient'> <a href='entrar'>Abres la puerta</a></p>\
		<p class='transient'> <a href='izquierda'>No la abres y te vas por el otro camino</a></p>"
		
		
		
	),
	entrar: new undum.SimpleSituation(
		"<p>Entras y te encuentras un meme del 2012, te da un paro cardiaco y mueres</p>"
	),
	end: new undum.SimpleSituation(
		"<p>THE END</p>"
	),
	
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */

undum.game.qualityGroups = {
  inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

undum.game.qualities = {
  antorcha: new undum.OnOffQuality(
  "Antorcha", {priority:"0001", group:'inventario', onDisplay:"✓"}
  ),
  llave: new undum.OnOffQuality(
  "Llave", {priority:"0002", group:'inventario', onDisplay:"✓"}
  )
};
undum.game.init = function(character, system) {
  system.setQuality( "antorcha" , false )
  system.setQuality( "llave" , false )
  system.setCharacterText("<p>¿Saldremos de la cueva?</p>");
};
