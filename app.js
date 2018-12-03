'use strict';

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

    validatePlayers(event){
        if (!this.player1 || !this.player2){
            return
        }
        this.validPlayers = true;
        this.gameStatus.player1.set.name(this.player1)
        this.gameStatus.player2.set.name(this.player2)
        this.scope.$broadcast('storeChanged')

        //console.log(this.gameStatus.player1.get.name())
    }
}

angular.module('gamesApp', [
    'ngRoute',
    'scoreBoard',
    'gameSlider',
    'tresEnRaya',
    'conectaCuatro',
])
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
