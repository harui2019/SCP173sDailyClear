namespace SpriteKind {
    export const Dclass = SpriteKind.create()
    export const SCP = SpriteKind.create()
}
function kill_chosen () {
    // it's counting by euclidean length.
    if (D17301_look == 0 && D17302_look == 0) {
        if (D17301_alive == 1 && D17302_alive == 1) {
            if (Math.abs(SCP173.x - D17302.x) + Math.abs(SCP173.y - D17302.y) > Math.abs(SCP173.x - D17301.x) + Math.abs(SCP173.y - D17301.y)) {
                D17301_kill()
            } else {
                D17302_kill()
            }
        } else if (D17301_alive == 1) {
            D17301_kill()
        } else {
            D17302_kill()
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_switch == 0 && D17302_alive == 1) {
        toD17302()
    } else if (_switch == 1 && D17301_alive == 1) {
        toD17301()
    }
})
function D17302_kill () {
    SCP173.setPosition(D17302.x, D17302.y)
    D17302_alive = 0
    D17302.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(500)
    toD17301()
}
function toD17301 () {
    _switch = 0
    arrow.setImage(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    arrow.setPosition(D17301.x, D17301.y)
    D17301.setVelocity(0, 0)
    D17302.setVelocity(0, 0)
}
function D17302_isdanger () {
    if ((SCP173.x - D17302.x) * (SCP173.y - D17302.y) >= 0) {
        if ((SCP173.x - D17302.x) * D17302_move_x <= 0 && (SCP173.y - D17302.y) * D17302_move_y <= 0) {
            D17302_look = 0
            info.player2.setScore(0)
        } else {
            D17302_look = 1
            info.player2.setScore(1)
        }
    } else {
        if ((SCP173.x - D17302.x) * D17302_move_x <= 0 || (SCP173.y - D17302.y) * D17302_move_y <= 0) {
            D17302_look = 1
            info.player2.setScore(1)
        } else {
            D17302_look = 0
            info.player2.setScore(0)
        }
    }
}
function D17301_kill () {
    SCP173.setPosition(D17301.x, D17301.y)
    D17301_alive = 0
    D17301.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(500)
    toD17302()
}
function D17301_isdanger () {
    if ((SCP173.x - D17301.x) * (SCP173.y - D17301.y) >= 0) {
        if ((SCP173.x - D17301.x) * D17301_move_x <= 0 && (SCP173.y - D17301.y) * D17301_move_y <= 0) {
            D17301_look = 0
            info.player1.setScore(0)
        } else {
            D17301_look = 1
            info.player1.setScore(1)
        }
    } else {
        if ((SCP173.x - D17301.x) * D17301_move_x <= 0 || (SCP173.y - D17301.y) * D17301_move_y <= 0) {
            D17301_look = 1
            info.player1.setScore(1)
        } else {
            D17301_look = 0
            info.player1.setScore(0)
        }
    }
}
function move_method (mySprite: Sprite) {
    if (controller.up.isPressed()) {
        mySprite.setVelocity(0, -50)
        arrow.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.down.isPressed()) {
        mySprite.setVelocity(0, 50)
        arrow.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.right.isPressed()) {
        mySprite.setVelocity(50, 0)
        arrow.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.left.isPressed()) {
        mySprite.setVelocity(-50, 0)
        arrow.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        mySprite.setVelocity(0, 0)
    }
}
function poop_generate () {
    poop_num = 0
    for (let index = 0; index < randint(2, 5); index++) {
        poop1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . a b a a . . . . . . 
            . . . . . c b a f c a c . . . . 
            . . . . c b b b f f a c c . . . 
            . . . . b b f a b b a a c . . . 
            . . . . c b f f b a f c a . . . 
            . . . . . c a a c b b a . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        poop1.setPosition(randint(8, 152), randint(8, 72))
        poop_num += 1
    }
}
function D17302_set () {
    D17302 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Dclass)
    D17302.setPosition(30, 0)
    D17302_alive = 1
    D17302_move_x = 1
    D17302_move_y = 1
    D17302_look = 1
    info.player2.setScore(1)
}
function D17301_set () {
    D17301 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f c f f f . . . 
        . . f f f f f f c c f f f c . . 
        . . f f f c f f f f f f f c . . 
        . . c c c f f f e e f f c c . . 
        . . f f f f f e e f f c c f . . 
        . . f f f b f e e f b f f f . . 
        . . . f 4 1 f 4 4 f 1 4 f . . . 
        . . . f e 4 4 4 4 4 4 e f . . . 
        . . . f f f e e e e f f f . . . 
        . . f e f b 7 7 7 7 b f e f . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . e e f 6 6 6 6 6 6 f e e . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Dclass)
    D17301.setPosition(0, 0)
    D17301_alive = 1
    D17301_move_x = 1
    D17301_move_y = 1
    D17301_look = 1
    info.player1.setScore(1)
}
function D17301_work () {
    move_method(D17301)
    if (controller.up.isPressed()) {
        D17301.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f c c c c c c c c f f . . 
            . . f f c c f c c c c c c f . . 
            . . f f f f f c c c f c c f . . 
            . . f f f f c c c f c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . f e f f f f f f f f e f . . 
            . . e 4 f 7 7 7 7 7 7 c 4 e . . 
            . . e e f 6 6 6 6 6 6 f e e . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        D17301_move_x = -1
    } else if (controller.down.isPressed()) {
        D17301.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f e e f f c c . . 
            . . f f f f f e e f f c c f . . 
            . . f f f b f e e f b f f f . . 
            . . . f 4 1 f 4 4 f 1 4 f . . . 
            . . . f e 4 4 4 4 4 4 e f . . . 
            . . . f f f e e e e f f f . . . 
            . . f e f b 7 7 7 7 b f e f . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . e e f 6 6 6 6 6 6 f e e . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        D17301_move_x = 1
    } else if (controller.right.isPressed()) {
        D17301.setImage(img`
            . . . . . f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f c f f f c f f . . . 
            . . f c f f c c f f f c c f f . 
            . . f c c f f f f e f f f f f . 
            . . f f f f f f f e e f f f . . 
            . . f f e e f b f e e f f . . . 
            . . . f e 4 e 1 f 4 4 f . . . . 
            . . . f f f e 4 4 4 4 f . . . . 
            . . . . f e e e e e f f . . . . 
            . . . . e 4 4 e 7 7 7 f . . . . 
            . . . . e 4 4 e 7 7 7 f . . . . 
            . . . . f e e f 6 6 6 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        D17301_move_y = 1
    } else if (controller.left.isPressed()) {
        D17301.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f c f f f f f f . . . 
            . . . f f c f f f c f f f f . . 
            . f f c c f f f c c f f c f . . 
            . f f f f f e f f f f c c f . . 
            . . f f f e e f f f f f f f . . 
            . . . f f e e f b f e e f f . . 
            . . . . f 4 4 f 1 e 4 e f . . . 
            . . . . f 4 4 4 4 e f f f . . . 
            . . . . f f e e e e e f . . . . 
            . . . . f 7 7 7 e 4 4 e . . . . 
            . . . . f 7 7 7 e 4 4 e . . . . 
            . . . . f 6 6 6 f e e f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        D17301_move_y = -1
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Dclass, function (sprite, otherSprite) {
    if (controller.A.isPressed() && game.runtime() > 1000) {
        poop_num += -1
        sprite.destroy()
    }
    if (poop_num == 0) {
        tiles.setTilemap(tilemap`level2`)
        for (let index = 0; index <= 6; index++) {
            tiles.setWallAt(tiles.getTileLocation(index, 5), true)
        }
        tiles.setWallAt(tiles.getTileLocation(9, 5), true)
    }
})
function toD17302 () {
    _switch = 1
    arrow.setImage(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    arrow.setPosition(D17302.x, D17302.y)
    D17301.setVelocity(0, 0)
    D17302.setVelocity(0, 0)
}
function D17302_work () {
    move_method(D17302)
    if (controller.up.isPressed()) {
        D17302.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        D17302_move_x = -1
    } else if (controller.down.isPressed()) {
        D17302.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        D17302_move_x = 1
    } else if (controller.right.isPressed()) {
        D17302.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        D17302_move_y = 1
    } else if (controller.left.isPressed()) {
        D17302.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        D17302_move_y = -1
    }
}
let poop1: Sprite = null
let poop_num = 0
let D17301_move_y = 0
let D17301_move_x = 0
let D17302_move_y = 0
let D17302_move_x = 0
let D17302_alive = 0
let D17301_alive = 0
let D17302_look = 0
let D17301_look = 0
let D17302: Sprite = null
let D17301: Sprite = null
let _switch = 0
let arrow: Sprite = null
let SCP173: Sprite = null
D17301_set()
D17302_set()
poop_generate()
SCP173 = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.SCP)
SCP173.setPosition(randint(24, 152), randint(8, 72))
arrow = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 . . . . . . . . . . . . . . 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
arrow.setPosition(8, 8)
_switch = 0
D17301.setFlag(SpriteFlag.StayInScreen, true)
D17302.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tilemap`level3`)
for (let index = 0; index <= 12; index++) {
    tiles.setWallAt(tiles.getTileLocation(index, 5), true)
}
forever(function () {
    if (_switch == 0) {
        D17301_work()
        D17301_isdanger()
    } else if (_switch == 1) {
        D17302_work()
        D17302_isdanger()
    }
    kill_chosen()
    if (D17301_alive == 0 && D17302_alive == 0) {
        pause(1000)
        game.over(false)
    } else if (SCP173.y > 96) {
        game.over(false)
    }
    if (D17302.y > 104 && D17301.y > 104) {
        game.over(true)
    }
})
