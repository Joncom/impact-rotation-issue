ig.module('game.animation-fix')
.requires('impact.animation')
.defines(function(){ "use strict";

    ig.Animation.inject({

        draw: function( targetX, targetY ) {
            var bbsize = Math.max(this.sheet.width, this.sheet.height);

            /* START FIX */
            var angle = (
                (this.angle > Math.PI * 0.5 && this.angle < Math.PI * 1) ||
                (this.angle > Math.PI * 1.5 && this.angle < Math.PI * 2)) ?
                    Math.PI - this.angle : this.angle;
            var rotatedWidth = Math.abs(Math.sin(angle) * this.sheet.height + Math.cos(angle) * this.sheet.width);
            var rotatedHeight = Math.abs(Math.sin(angle) * this.sheet.width + Math.cos(angle) * this.sheet.height);
            var rotatedOffsetX = (this.sheet.width - rotatedWidth) / 2;
            var rotatedOffsetY = (this.sheet.height - rotatedHeight) / 2;

            // On screen?
            if(
               targetX + rotatedOffsetX > ig.system.width || targetY + rotatedOffsetY > ig.system.height ||
               targetX + bbsize - rotatedOffsetX < 0 || targetY + bbsize - rotatedOffsetY < 0
            ) {
                return;
            }
            /* END FIX */

            if( this.alpha != 1) {
                ig.system.context.globalAlpha = this.alpha;
            }

            if( this.angle == 0 ) {
                this.sheet.image.drawTile(
                    targetX, targetY,
                    this.tile, this.sheet.width, this.sheet.height,
                    this.flip.x, this.flip.y
                );
            }
            else {
                ig.system.context.save();
                ig.system.context.translate(
                    ig.system.getDrawPos(targetX + this.pivot.x),
                    ig.system.getDrawPos(targetY + this.pivot.y)
                );
                ig.system.context.rotate( this.angle );
                this.sheet.image.drawTile(
                    -this.pivot.x, -this.pivot.y,
                    this.tile, this.sheet.width, this.sheet.height,
                    this.flip.x, this.flip.y
                );
                ig.system.context.restore();
            }

            if( this.alpha != 1) {
                ig.system.context.globalAlpha = 1;
            }
        }
    });

});