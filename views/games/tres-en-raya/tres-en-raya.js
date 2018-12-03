'use strict';

let tresEnRayaComponent = {
    templateUrl: '/tres-en-raya.html',
    controller: 'tresEnRayaCtrl'
}

class tresEnRayaCtrl {
    constructor($scope, gameStatus) {
        this.scope = $scope;
        this.tablero = [
            [null, null, null,],
            [null, null, null,],
            [null, null, null,]
        ]
        this.isXTurn = true;
        this.round = 0;
        this.isEnded = false;
        this.result = 'Ambos pierden';
        this.gameStatus = gameStatus
        this.player1 = {
            name: this.gameStatus.player1.get.name(),
            mark: "X",
        }
        this.player2 = {
            name: this.gameStatus.player2.get.name(),
            mark: "O",
        }
        this.winLine=[];
        //Escuchamos evento, si el store cambian, actualizamos campos
        this.scope.$on('storeChanged', ()=>{
            this.player1 = {
                name: this.gameStatus.player1.get.name(),
                mark: "X",
            }
            this.player2 = {
                name: this.gameStatus.player2.get.name(),
                mark: "O",
            }
        })
    }

    turn(row, col) {
        if (!this.isEnded) {
            if (this.tablero[row][col] === null) {
                let player = this.isXTurn ? this.player1 : this.player2;
                this.tablero[row][col] = player.mark;
                this.isXTurn = !this.isXTurn;
                this.round++
                if (this.checkWinner(row, col)) {
                    this.result = `Has ganado ${player.name}!!`;
                    if (player.mark === "X"){
                        this.gameStatus.player1.set.wins(this.gameStatus.player1.get.wins() + 1)
                    } else {
                        this.gameStatus.player2.set.wins(this.gameStatus.player2.get.wins() + 1)
                    }
                    this.isEnded = true;
                } else {
                    if (this.round === 9) {
                        this.isEnded = true;
                    }
                }
            }
        }
    }

    checkWinner(row, col) {
        var winner = false;
        //Cheking rows
        if (!winner && this.tablero[row][0] === this.tablero[row][1] && this.tablero[row][1] === this.tablero[row][2]) {
            for (let col = 0; col < 3; col++){
                this.winLine.push({row, col})
            }
            winner = true;
        }
        //Cheking colums
        if (!winner &&  this.tablero[0][col] === this.tablero[1][col] && this.tablero[1][col] === this.tablero[2][col]) {
            for (let row = 0; row < 3; row++){
                this.winLine.push({row, col})
            }
            winner = true;
        }
        //Cheking diagonals
        if (!winner && this.tablero[0][0] && this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2]) {
            for (let i = 0; i < 3; i++){
                this.winLine.push({row:i, col:i})
            }
            winner = true;
        }
        if (!winner &&  this.tablero[0][2] && this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0]) {
            let col = 2;
            for (let row = 0; row < 3; row++){
                this.winLine.push({row, col})
                col--;
            }
            winner = true;
        }
        return winner;
    }

    reset() {
        console.log(this.winLine)
        if (this.isEnded) {
            this.isEnded = false;
            this.isXTurn = true;
            this.round = 0;
            this.tablero = [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ];
            this.winLine=[];
            this.result = 'Ambos pierden';
        }
    }
}

angular.module('tresEnRaya', [
    'ngRoute',
    'tresEnRaya.board',
])
    .component('tresEnRaya', tresEnRayaComponent)
    .controller('tresEnRayaCtrl',tresEnRayaCtrl)