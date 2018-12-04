'use strict'
/**
 * MODULO: tresEnRaya.board
 * 
 * Modulo que se encarga del estado del propio tablero,
 * de manera que actualice lo que se muestra por pantalla
 * 
 * Consta de dos componentes, uno para el tablero y otro para cada celda del tablero
 * 
 * Componente boardComponent: Genera la tabla y controla la informacion que necesita cada celda y el boton de reinicio,
 * la funcion es un callback que llama al modulo padre tresEnRaya.
 *
 * Componente circleComponent: Genera una ficha de un color u otro en funcion del turno (modulo padre tresEnRaya) y recibe como
 * callbak una funcion para cuando hagan click en la ficha.
 * 
 * El flujo sería: Click en la ficha -> Dispara una funcion que avisa al modulo board se 
 * ha hecho click -> Este a su vez, pasa el vento a su modulo padre tresEnRara, quien actuliza 
 * el estado del juego en funcion de la información recibida. Ahora el proceso se repite pero de 
 * manera descendente, haciendo que los modulos hijos se actualizen para ajustarse a los cambios de estado
 */

let boardComponent = {
    bindings: {
        tablero: '<',
        isEnded: '<',
        winLine:'<',
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
        inWinLine:'<',
        clickedSquare: '&'
    },
    template: `<div class="board-cell" 
                    ng-click="circle.handleClick()"
                    ng-class="{'inWinLine': circle.inWinLine}">
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

    $onChanges(){
        this.inWinLine = function (row, col){
            let found;
            if (this.winLine.length===0){
                return false
            }
            found =  this.winLine.find((cell)=>{
                return cell.row === row && cell.col === col
            });
            return found ? true : false;
        }
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
