'use strinct'

angular.module('player', [

])
.component('player', {
    templateUrl:'views/games/tres-en-raya/components/player/player.html',
    controller: 'playerController'
})
.controller('playerController', function(){
    this.name = "";
})