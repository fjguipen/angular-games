'use strict'

let boardComponent = {
    bindings:{
        tablero:'<',
        isEnded:'<',
        handleClick:'&',
        handleReset:'&',
    },
    templateUrl:'views/games/tres-en-raya/components/board/board.html',
    controller: 'boardController',
    controllerAs:'board',
}

class boardController {
    constructor(){
    }

    clickedSquare (row, col){
        this.handleClick({row, col})
    }

}

angular.module('tresEnRaya.board',[

])
.component('board', boardComponent)
.controller('boardController', boardController)