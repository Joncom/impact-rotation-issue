ig.module('game.entities.rectangle')
.requires('impact.entity')
.defines(function() {

    EntityRectangle = ig.Entity.extend({

        size: { x: 256, y: 128 },
        animSheet: new ig.AnimationSheet('media/rectangle.png', 256, 128),
        _wmDrawBox: true,

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('default', 1, [0]);
            this.currentAnim.angle = this.angle;
        }

    });

});