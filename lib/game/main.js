ig.module('game.main')
.requires(
    'impact.debug.debug',
    'game.animation-fix',
    'impact.game',
    'game.levels.example'
)
.defines(function(){

    MyGame = ig.Game.extend({

        init: function() {
            this.loadLevel(LevelExample);
        }

    });

    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2
    ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
