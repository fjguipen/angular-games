/**
 * MODULO: scoreBoard
 * 
 * Muestra las vistorias acumuladas por cada uno de los jugadores,
 * independientemente del juego en el que la consiguiesen 
 * (se mantienen hasta que se recargue el navegador)
 */

let scoreBoardComponent = {
    //Paso como atributo del componente el objeto store con la info de los jugadores
    bindings:{
        store:'<'
    },
    controller: 'scoreBoardCtrl',
    controllerAs: 'scrBoard',
    templateUrl: '/score-board.html',
}

class scoreBoardCtrl{
    constructor () {

    }

}

angular.module('scoreBoard', [])
.component('scoreBoard', scoreBoardComponent)
.controller('scoreBoardCtrl', scoreBoardCtrl)