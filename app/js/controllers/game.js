(function() {
'use strict';

    angular
        .module('App')
        .controller('gameController', gameController);

    gameController.$inject = ['$scope', 'gamePlay'];
    function gameController($scope, gamePlay) {

        $scope.isDebugging = false;


        $scope.game = {
            width: "100%",
			height: "100%",
			renderer: Phaser.AUTO,
            state: gamePlay.getState($scope),
			loadPath: "res/game/"
            
        };

        $scope.toggleDebug = function(){
            $scope.isDebugging = !$scope.isDebugging;
            $scope.game.instance.state.getCurrentState().toggleDebug($scope.isDebugging);
        };
    }
})();