/**
 * MODULO: gameSlider
 * 
 * Genera un pequeño slider con los distintos juegos disponibles
 * 
 * @param totalWidth: indica cuantos juegos. Cada juego extra a partir de la unidad suma 300 Ej: 4 juegos = 900  ó (nJuegos * 300 - 300)
 */

let gameSliderComponent = {
    controller: 'gameSliderCtrl',
    controllerAs: 'slid',
    templateUrl:'/game-slider.html',
}

class gameSliderCtrl{
    constructor(){
        this.posicion = 0;
        this.totalWidth = -300;
    }
    
    toLeft(){
        this.posicion += 300;
    }
    toRight(){
        this.posicion -= 300;
    }
}

angular.module('gameSlider',[])
.component('gameSlider', gameSliderComponent)
.controller('gameSliderCtrl', gameSliderCtrl)


