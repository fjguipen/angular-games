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
        if (this.tablero[row][0] === this.tablero[row][1] && this.tablero[row][1] === this.tablero[row][2]) {
            winner = true;
        }
        //Cheking colums
        if (this.tablero[0][col] === this.tablero[1][col] && this.tablero[1][col] === this.tablero[2][col]) {
            winner = true;
        }
        //Cheking diagonals
        if (this.tablero[0][0] && this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2]) {
            winner = true;
        }
        if (this.tablero[0][2] && this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0]) {
            winner = true;
        }
        return winner;
    }

    reset() {
        if (this.isEnded) {
            this.isEnded = false;
            this.isXTurn = true;
            this.round = 0;
            this.tablero = [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ];
            this.result = 'Ambos pierden';
        }
    }
}

angular.module('tresEnRaya', [
    'ngRoute',
    'tresEnRaya.player',
    'tresEnRaya.board',
])
    .component('tresEnRaya', tresEnRayaComponent)
    .controller('tresEnRayaCtrl',tresEnRayaCtrl)