'use strict';

angular.module('tresEnRaya', [
  'ngRoute',
  'player',
])
.component('tresEnRaya', {
  templateUrl: 'views/games/tres-en-raya/tres-en-raya.html',
  controller: 'tresEnRayaCtrl'
}) 
.controller('tresEnRayaCtrl', function (){ 
  this.tablero = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
  ];
  this.isXTurn = true;
  this.round = 0;
  this.isEnded = false;
  this.result = 'Ambos pierden';
  this.turn = function (row, col){
    if (!this.isEnded){
      if (this.tablero[row][col] === null){
        var player = this.isXTurn ? 'X' : 'O';
        this.tablero[row][col] = player;
        this.isXTurn = !this.isXTurn;
        this.round++
        if (this.checkWinner(row, col)){
          this.result = `Ganador ${player}`;
          this.isEnded = true;
        } else {
          if (this.round === 9){
            this.isEnded = true;
        }
        
        }
      }     
    }
  }
  this.checkWinner = function (row, col){
    var winner = false;
    //Cheking rows
    if (this.tablero[row][0] === this.tablero[row][1] && this.tablero[row][1] === this.tablero[row][2]){
        winner = true;
    }
    //Cheking colums
    if (this.tablero[0][col] === this.tablero[1][col] && this.tablero[1][col] === this.tablero[2][col]){
      winner = true;
    }
    //Cheking diagonals
    if (this.tablero[0][0] && this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2]){
      winner = true;
    }

    if (this.tablero[0][2] && this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0]){
      winner = true;
    }
    return winner;
  }
  this.reset = function (){
    this.isEnded=false;
    this.isXTurn=true;
    this.round=0;
    this.tablero = [
      [null,null,null],
      [null,null,null],
      [null,null,null],
    ];
    this.result = 'Ambos pierden';
  }
}); 