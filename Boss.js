/**
 * Jefe final del juego. Hereda de la clase Opponent
 * @extends Opponent
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego a la que pertenece el jefe
     */
    constructor (game) {
        super(game);
        this.speed = this.speed * 2; // El doble de velocidad que el oponente
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
    }
}