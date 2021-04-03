let currentLevel = 1

scene.setBackgroundColor(15)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})

nextLevel()

function nextLevel () {
    if (currentLevel == 1) {
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnTile(player, tiles.getTileLocation(1, 35))

        tiles.setTileAt(tiles.getTileLocation(0, 30), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 21), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 17), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`enemySpawner`)

        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`lvl1end`)
    }
}