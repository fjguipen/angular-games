'use strict';
/**
 * MODULO: gamesApp
 * 
 * Su funcion en la de controlar el estado del juego,
 * quiénes son los jugadores y qué puntuacion llevan
 * 
 * Modulo principal del que cuelgan el resto de móduos
 */
let gamesAppComponent = {
    controller: 'gamesAppController',
    controllerAs: 'app',
    templateUrl: '/app.html',
}

class gamesAppController {
    constructor($scope,gameStatus) {
        this.scope = $scope;
        this.store = gameStatus.store();
        this.player1 = this.store.player1.name;
        this.player2 = this.store.player2.name;
        this.validPlayers= false;
        this.$onInit = function (){
            this.gameStatus = gameStatus
        }
    }

    //Re-validacion de imput. Solo comprueba que ambos tengan algun dato
    validatePlayers(event){
        if (!this.player1 || !this.player2){
            return
        }
        this.validPlayers = true;
        //Guardo los nombres de jugador usando la factoria
        this.gameStatus.player1.set.name(this.player1)
        this.gameStatus.player2.set.name(this.player2)
        //Emito un evento a todos los hijos del modulo, para que estos se actualicen
        this.scope.$broadcast('storeChanged')
    }
}

angular.module('gamesApp', [
    'ngRoute',
    'scoreBoard',
    'gameSlider',
    'tresEnRaya',
    'conectaCuatro',
])
/**
 * Factoria que guarda un objeto store y proporciona una serie
 * de funciones para acceder y manipularlo. Este estará disponible para
 * todos los modulos que se suscriban a el.
 */
    .factory("gameStatus",() => {
        let store = {
            player1: {
                name: "",
                wins: 0,
            },
            player2: {
                name: "",
                wins: 0,
            }
        }
        return{
            player1:{
                get: {
                    name: function (){return store.player1.name;},
                    wins: function (){return store.player1.wins;}
                },
                set: {
                    
                    name: function (name){store.player1.name = name;},
                    wins: function (wins){store.player1.wins = wins;}
                }
            },
            player2:{
                get: {
                    name: function (){return store.player2.name},
                    wins: function (){return store.player2.wins}
                },
                set: {
                    name: function (name){return store.player2.name = name},
                    wins: function (wins){return store.player2.wins = wins}
                }
            },
            store: function(){return store}
            
        }       
    })
    .component('gamesApp', gamesAppComponent)
    .controller('gamesAppController', gamesAppController)

    /** 
    *  Router
    */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<game-slider></game-slider>'
            })
            .when('/tres-en-raya', {
                template: `<tres-en-raya ></tres-en-raya>`,
            })
            .when('/conecta-cuatro', { 
                template: `<conecta-cuatro class="text-center"></conecta-cuatro>`,
            })
            .otherwise({ redirectTo:'/'});
    }])
