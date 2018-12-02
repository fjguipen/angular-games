let scoreBoardComponent = {
    bindings:{
        store:'<'
    },
    controller: 'scoreBoardCtrl',
    controllerAs: 'scrBoard',
    templateUrl: 'views/score-board/score-board.html',
}

class scoreBoardCtrl{
    constructor () {

    }

}

angular.module('scoreBoard', [])
.component('scoreBoard', scoreBoardComponent)
.controller('scoreBoardCtrl', scoreBoardCtrl)