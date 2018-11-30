'use strict'

let boardComponent = {
    bindings:{
        tablero:'<',
        handleClick:'&',
    },
    templateUrl:'views/games/tres-en-raya/components/board/board.html',
    controller: 'boardController',
    controllerAs:'board',
}

class boardController {
    constructor(){

    }

    clickedSquare(fila, colum){
        console.log(this.tablero[fila][colum])
        this.handleClick({row: fila, col: colum})
    }
}

angular.module('tresEnRaya.board',[

])
.component('board', boardComponent)
.controller('boardController', boardController)