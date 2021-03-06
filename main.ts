namespace SpriteKind {
    export const safe = SpriteKind.create()
    export const boolet = SpriteKind.create()
    export const hasKey = SpriteKind.create()
}
function spawnBoss (x: number, y: number) {
    let bosslist: Sprite[] = []
    boss = sprites.create(img`
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................444444444444444444444............
        .................4444fff4444444fff4444............
        .................4444fff4444444fff4444............
        .................5555fff5555555fff5555............
        .................5555555fff5fff5555555............
        .................5555555fff5fff5555555............
        .................5555555fff5fff5555555............
        .................555555555555555555555............
        .................555555fff555fff555555............
        .................555555fff555fff555555............
        .................555555fff555fff555555............
        .................555555555555555555555............
        .................555555555555555555555............
        .................555555555555555555555............
        .................55555fffffffffff55555............
        .................55555fffffffffff55555............
        .................55555fffffffffff55555............
        .................555555555555555555555............
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        .....................fff.......fff................
        ..................................................
        ..................................................
        `, SpriteKind.Enemy)
    boss.setPosition(x, y)
    bosslist.push(boss)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    playerHealth.value += 50
    tiles.setTileAt(location, assets.tile`myTile9`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boolet, function (sprite, otherSprite) {
    otherSprite.destroy()
    playerHealth.value += -10
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (setSafe == 0) {
        if (controller.up.isPressed()) {
            Jeff.setVelocity(0, -50)
        }
        if (controller.left.isPressed()) {
            Jeff.setVelocity(-50, 0)
        }
        if (controller.right.isPressed()) {
            Jeff.setVelocity(50, 0)
        }
        if (controller.down.isPressed()) {
            Jeff.setVelocity(0, 50)
        }
        Jeff.setKind(SpriteKind.safe)
        setSafe += 1
        pause(500)
        Jeff.setKind(SpriteKind.Player)
        Jeff.setVelocity(0, 0)
        pause(500)
        setSafe = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ammoCount > 0) {
        if (dir == 0) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, 0, -200)
        }
        if (dir == 6) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, -200, 0)
        }
        if (dir == 2) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 5 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, 200, 0)
        }
        if (dir == 4) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, 0, 200)
        }
        if (dir == 7) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . . 5 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, -200, -200)
        }
        if (dir == 1) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, 200, -200)
        }
        if (dir == 5) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, -200, 200)
        }
        if (dir == 3) {
            bullet = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . . 5 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Jeff, 200, 200)
        }
        bullet.setKind(SpriteKind.Projectile)
        ammoCount += -1
    } else {
        Jeff.say("Reloading", 2000)
        pause(2000)
        ammoCount = 30
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    playerHealth.value += -0.1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
function createEnemy (x: number, y: number) {
    angybullet = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 5 f 5 5 5 f 5 . . . . . 
        . . . . 5 5 f 5 f 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . f f f 5 f 5 5 5 f 5 f f f . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 f 5 f 5 5 . . . . . 
        . . . . 5 f 5 f 5 f 5 . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f . . . . . f . . . . . 
        `, SpriteKind.Enemy)
    angybullet.setPosition(x, y)
    enemies.push(angybullet)
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile18`, function (sprite, location) {
    sprite.follow(Jeff, 0)
})
function setLevelTitleMap (num: number) {
    enemies = []
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
        Jeff.setPosition(25, 750)
        createEnemy(250, 750)
        createEnemy(250, 650)
        createEnemy(310, 650)
        createEnemy(310, 750)
        createEnemy(650, 750)
        createEnemy(700, 750)
        createEnemy(250, 450)
        createEnemy(250, 500)
        createEnemy(350, 450)
        createEnemy(350, 500)
    } else if (num == 1) {
        tiles.setTilemap(tilemap`level4`)
        Jeff.setPosition(25, 55)
        createEnemy(250, 55)
        createEnemy(375, 55)
        createEnemy(350, 200)
        createEnemy(275, 200)
        createEnemy(275, 350)
        createEnemy(350, 350)
        createEnemy(275, 525)
        createEnemy(350, 525)
        createEnemy(275, 590)
        createEnemy(350, 590)
    } else if (num == 2) {
        tiles.setTilemap(tilemap`2`)
        Jeff.setPosition(184, 345)
        spawnBoss(184, 175)
    }
    hasNextLevel()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    currentlevel += 1
    if (hasNextLevel()) {
        pause(100)
        game.splash("Next Level")
    }
    setLevelTitleMap(currentlevel)
})
function hasNextLevel () {
    return currentlevel != levelcount
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    currentlevel += 1
    if (hasNextLevel()) {
        pause(100)
        game.splash("Next Level")
    }
    setLevelTitleMap(currentlevel)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    enemies.removeAt(enemies.indexOf(otherSprite))
})
let enemybullet: Sprite = null
let enemies: Sprite[] = []
let angybullet: Sprite = null
let bullet: Sprite = null
let dir = 0
let boss: Sprite = null
let ammoCount = 0
let setSafe = 0
let playerHealth: StatusBarSprite = null
let currentlevel = 0
let levelcount = 0
let Jeff: Sprite = null
Jeff = sprites.create(img`
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
    `, SpriteKind.Player)
scene.setBackgroundColor(15)
scene.cameraFollowSprite(Jeff)
levelcount = 2
currentlevel = 2
playerHealth = statusbars.create(20, 2, StatusBarKind.Health)
playerHealth.attachToSprite(Jeff)
setLevelTitleMap(currentlevel)
setSafe = 0
ammoCount = 30
Jeff.setFlag(SpriteFlag.Ghost, true)
game.onUpdate(function () {
    Jeff.x += controller.dx()
    Jeff.y += controller.dy()
})
game.onUpdateInterval(1000, function () {
    for (let value of enemies) {
        enemybullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 4 4 4 2 2 . . . . 
            . . . . . 2 4 4 5 4 4 2 . . . . 
            . . . . . 2 4 4 5 4 4 2 . . . . 
            . . . . . 2 2 4 4 4 2 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, Jeff.x - value.x, Jeff.y - value.y)
        enemybullet.setKind(SpriteKind.boolet)
    }
})
game.onUpdateInterval(1000, function () {
    for (let value of enemies) {
        enemybullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 4 4 4 2 2 . . . . 
            . . . . . 2 4 4 5 4 4 2 . . . . 
            . . . . . 2 4 4 5 4 4 2 . . . . 
            . . . . . 2 2 4 4 4 2 2 . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, Jeff.x - value.x, Jeff.y - value.y)
        enemybullet.setKind(SpriteKind.boolet)
    }
})
forever(function () {
    if (controller.down.isPressed() && controller.right.isPressed()) {
        dir = 3
    } else if (controller.down.isPressed() && controller.left.isPressed()) {
        dir = 5
    } else if (controller.up.isPressed() && controller.right.isPressed()) {
        dir = 1
    } else if (controller.up.isPressed() && controller.left.isPressed()) {
        dir = 7
    } else if (controller.up.isPressed()) {
        dir = 0
    } else if (controller.left.isPressed()) {
        dir = 6
    } else if (controller.right.isPressed()) {
        dir = 2
    } else if (controller.down.isPressed()) {
        dir = 4
    }
})
forever(function () {
    for (let value of enemies) {
        if (sight.isInSight(
        value,
        Jeff,
        100,
        false
        )) {
            value.follow(Jeff, 25)
        }
    }
})
