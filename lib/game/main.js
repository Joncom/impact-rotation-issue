ig.module('game.main')
.requires(
    'impact.game',
    'impact.font'
)
.defines(function(){

    MyGame = ig.Game.extend({

        init: function() {
            // Initialize your game here; bind keys etc.
        }

    });

    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2
    ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
