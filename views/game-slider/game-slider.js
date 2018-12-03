let gameSliderComponent = {
    controller: 'gameSliderCtrl',
    controllerAs: 'slid',
    templateUrl:'/game-slider.html',
}

class gameSliderCtrl{
    constructor(){
        this.posicion = 0;
        this.totalWidth = -300;
    }

    toLeft(){
        this.posicion += 300;
    }
    toRight(){
        this.posicion -= 300;
    }
}

angular.module('gameSlider',[])
.component('gameSlider', gameSliderComponent)
.controller('gameSliderCtrl', gameSliderCtrl)


