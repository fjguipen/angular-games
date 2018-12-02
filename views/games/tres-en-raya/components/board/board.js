'use strict'

let boardComponent = {
    bindings: {
        tablero: '<',
        isEnded: '<',
        handleClick: '&',
        handleReset: '&',
    },
    templateUrl: '/board.html',
    controller: 'boardController',
    controllerAs: 'board',
}

let circleComponent = {
    bindings: {
        currentValue: '<',
        row: '<',
        col: '<',
        clickedSquare: '&'
    },
    template: `<div class="board-cell" 
                    ng-click="circle.handleClick()">
                    <span ng-class="{'showUp': circle.currentValue, 
                                    'bg-rojo':  circle.currentValue === 'X',
                                    'bg-negro': circle.currentValue === 'O'}">                        
                    </span>
                </div>`,
    controller: 'circleController',
    controllerAs: 'circle'
}

class boardController {
    constructor() {
    }

    clickedSquare(row, col) {
        this.handleClick({ row, col })
    }

}

class circleController {
    constructor() {
    }

    $onInit() {
        this.handleClick = () => {
            this.clickedSquare({ row: this.row, col: this.col })
        }
    }
}

angular.module('tresEnRaya.board', [
    //'tresEnRaya.circle'
])
    .component('board', boardComponent)
    .component('circle', circleComponent)
    .controller('boardController', boardController)
    .controller('circleController', circleController)
