"use strict"

let playerComponent = {
    bindings:{
        name:'<',
        score:'<',
    },
    templateUrl:'views/games/tres-en-raya/components/player/player.html',
    controller: 'playerController',
    controllerAs:'player',
}

class playerController{
    constructor(){
        //this.prueba;
    }

}

angular.module('tresEnRaya.player', [

])
.component('player', playerComponent)
.controller('playerController', playerController)
/*
.controller('playerController', function playerController(){
    function $onInit () {
        this.prueba = this.name;
    }
    
})
*/