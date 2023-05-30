// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Fin extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("fin");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    console.log(data);
    this.cantidadEstrellas = data.cantidadEstrellas;
  }

  create() {
    this.add.image(200, 200, "victoria").setScale(0.2);
    this.cantidadEstrellasTexto = this.add.text(
      30,
      400,
      "Felicidades, terminaste el juego, tus Estrellas recolectadas son " +
        this.cantidadEstrellas,
      { fontSize: "15px", fill: "#FFFFFF" }
    );
  }
}
