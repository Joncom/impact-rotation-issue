impact-rotation-issue
=====================

#### Demonstrating a drawing bug currently present in all versions of ImpactJS. ####

![Screenshot 1](https://raw.githubusercontent.com/Joncom/impact-rotation-issue/master/media/screenshot1.png)
![Screenshot 2](https://raw.githubusercontent.com/Joncom/impact-rotation-issue/master/media/screenshot2.png)

## Explanation ##

As you can see from the first screenshot, each rectangle has a non-zero `angle` value and is therefore rotating into the screen area (bordered in green).

However, in the second screenshot, several of the rotated rectangles are not drawn.

This is because of the implementation of the `ig.Animation` class `draw` function, which contains:

```
// On screen?
if(
   targetX > ig.system.width || targetY > ig.system.height ||
   targetX + bbsize < 0 || targetY + bbsize < 0
) {
    return; // Do not draw.
}
```

Using the right-most triangle as an example, the above code is insufficient because even when its position (`targetX`) is greater than (`>`) the width of the screen (`ig.system.width`), it's still possible for the image to be rotated back into view.

**The function returns prematurely because `targetX > ig.system.width` does account for rotation.**