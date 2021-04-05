let currentLevel = 1

scene.setBackgroundColor(15)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`lvlend`, function (sprite, location) {
    currentLevel += 1
    if(currentLevel == 4){
        game.over(true)
    }
    nextLevel()
})

nextLevel()

function nextLevel () {
    if (currentLevel == 1) {
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnTile(player, tiles.getTileLocation(1, 35))

        tiles.setTileAt(tiles.getTileLocation(0, 30), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 24), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 17), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 3), assets.tile`enemySpawner`)

        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`lvlend`)

        for (let i of tiles.getTilesByType(assets.tile`enemySpawner`)) {
            let enemy = sprites.create(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(enemy, i)
            enemy.follow(player, 50)
        }
    }
    else if (currentLevel == 2) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(player, tiles.getTileLocation(1, 35))

        tiles.setTileAt(tiles.getTileLocation(11, 32), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 26), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 22), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 16), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 11), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 7), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 3), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 2), assets.tile`enemySpawner`)

        tiles.setTileAt(tiles.getTileLocation(1, 2), assets.tile`lvlend`)

        for (let i of tiles.getTilesByType(assets.tile`enemySpawner`)) {
            let enemy = sprites.create(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(enemy, i)
            enemy.follow(player, 50)
        }
    }
    else if (currentLevel == 3) {
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnTile(player, tiles.getTileLocation(1, 35))

        tiles.setTileAt(tiles.getTileLocation(11, 30), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(5, 26), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(2, 24), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(8, 20), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 17), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 14), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(6, 10), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(0, 2), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(11, 7), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`enemySpawner`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`enemySpawner`)

        tiles.setTileAt(tiles.getTileLocation(1, 3), assets.tile`lvlend`)

        for (let i of tiles.getTilesByType(assets.tile`enemySpawner`)) {
            let enemy = sprites.create(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(enemy, i)
            enemy.follow(player, 50)
        }
    }
}