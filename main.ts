scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    repond = game.askForString("type ur " + text_list.shift())
    tiles.setTileAt(location, sprites.castle.tileGrass2)
})
let repond = ""
let text_list: string[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    ........................
    .......fff...........222
    ....fffff2f.........2222
    ..ffeeeee22ff......22222
    .ffeeeeee222ff...22222cc
    .feeeefffeeeef...2222c22
    .fffffeee2222ef.2222c222
    fffe222fffffe2f2222cc22c
    fffffffffeeefff2222c22c2
    fefe44ebbf44eef22cc22cc2
    .fee4d4bbfddef.2cc22cc22
    ..feee4dddddfeec222cc222
    ...f2222222eeddc22cc2222
    ...f444445e44ddcccc222..
    ...ffffffffeeee222c222..
    ...fff...ff....222222...
    ..................22....
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let NAME = game.askForString("name")
game.showLongText("Hello " + NAME, DialogLayout.Bottom)
scene.cameraFollowSprite(mySprite)
text_list = ["best game ", "favorite thing", "favorite sport"]
forever(function () {
    if (tiles.getTilesByType(assets.tile`myTile`).length == 0) {
        game.showLongText("" + NAME + "like game " + repond[0], DialogLayout.Bottom)
        game.showLongText("" + NAME + "like " + repond[1], DialogLayout.Bottom)
        game.showLongText("" + NAME + "like sport" + repond[2], DialogLayout.Bottom)
        game.gameOver(true)
    }
})
