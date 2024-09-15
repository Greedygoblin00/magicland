namespace SpriteKind {
    export const Shopkeeper = SpriteKind.create()
    export const Tool = SpriteKind.create()
}
namespace NumProp {
    export const price = NumProp.create()
}
namespace StrProp {
    export const name = StrProp.create()
    export const wrongName = StrProp.create()
}
namespace StrArrayProp {
    export const behaviors = StrArrayProp.create()
}
namespace ImageProp {
    export const seed = ImageProp.create()
}
namespace ImageArrayProp {
    export const growTiles = ImageArrayProp.create()
}
function makeTool (image2: Image, name: string, amount: number, dontAddToInventory: boolean) {
    newTool = sprites.create(image2, SpriteKind.Tool)
    newTool.setFlag(SpriteFlag.Ghost, true)
    newTool.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataString(newTool, "name", name)
    sprites.setDataNumber(newTool, "amount", amount)
    if (!(dontAddToInventory)) {
        tools.push(newTool)
    }
    return newTool
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot_direction = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        BHandTool = tools[selectedIndex]
    } else if (BHandTool) {
        useTool(BHandTool, thePlayer)
    }
})
spriteutils.createRenderable(99, function (screen2) {
    screen2.fillRect(2, 98, 26, 20, 13)
    screen2.drawRect(2, 98, 26, 20, 14)
    screen2.fillRect(21, 98, 7, 20, 14)
    images.print(screen2, "A", 22, 104, 13)
if (AHandTool) {
        spriteutils.drawTransparentImage(AHandTool.image, screen2, 4, 100)
    }
    screen2.fillRect(32, 98, 26, 20, 13)
    screen2.drawRect(32, 98, 26, 20, 14)
    screen2.fillRect(51, 98, 7, 20, 14)
    images.print(screen2, "B", 52, 104, 13)
if (BHandTool) {
        spriteutils.drawTransparentImage(BHandTool.image, screen2, 34, 100)
    }
})
function closeInventory () {
    inventoryVisible = false
    controller.moveSprite(thePlayer)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        AHandTool = tools[selectedIndex]
    } else if (AHandTool) {
        useTool(AHandTool, thePlayer)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        selectedIndex = Math.max(selectedIndex - 1, 0)
    } else {
        Shoot_direction = 3
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        selectedIndex = Math.min(selectedIndex + 1, tools.length - 1)
    } else {
        Shoot_direction = 2
    }
})
function useTool (toolToUse: Sprite, toolUser: Sprite) {
    if (sprites.readDataString(toolToUse, "name") == "Fireball") {
        if (Shoot_direction == "1") {
            projectile = sprites.createProjectileFromSprite(assets.image`Fireball`, thePlayer, 0, -100)
        } else if (Shoot_direction == "2") {
            projectile = sprites.createProjectileFromSprite(assets.image`Fireball`, thePlayer, 100, 0)
        } else if (Shoot_direction == "3") {
            projectile = sprites.createProjectileFromSprite(assets.image`Fireball`, thePlayer, -100, 0)
        } else if (Shoot_direction == "4") {
            projectile = sprites.createProjectileFromSprite(assets.image`Fireball`, thePlayer, 100, 0)
        }
    }
    if (sprites.readDataString(toolToUse, "name") == "Magic ice shard") {
        if (Shoot_direction == "1") {
            projectile = sprites.createProjectileFromSprite(assets.image`watering can`, thePlayer, 0, -100)
        } else if (Shoot_direction == "2") {
            projectile = sprites.createProjectileFromSprite(assets.image`watering can`, thePlayer, 100, 0)
        } else if (Shoot_direction == "3") {
            projectile = sprites.createProjectileFromSprite(assets.image`watering can`, thePlayer, -100, 0)
        } else if (Shoot_direction == "4") {
            projectile = sprites.createProjectileFromSprite(assets.image`watering can`, thePlayer, 100, 0)
        }
    }
    if (sprites.readDataString(toolToUse, "name") == "Lightning bolt ") {
        projectile = sprites.createProjectileFromSprite(assets.image`Lightningbolt`, thePlayer, 50, 50)
    }
    if (sprites.readDataString(toolToUse, "name") == "Earth chunks") {
        projectile = sprites.createProjectileFromSprite(assets.image`gloves`, thePlayer, 50, 50)
    }
    if (sprites.readDataString(toolToUse, "name") == "watering can") {
    	
    }
    if (sprites.readDataString(toolToUse, "name") == "pillow") {
    	
    }
    if (sprites.readDataBoolean(toolToUse, "isSeed")) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.door4, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
    tiles.placeOnRandomTile(sprite, tiles.util.door4)
    if (tiles.getLoadedMap() == farmMap) {
        sprite.x += -16
    } else {
        sprite.x += 16
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Shoot_direction = 4
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        closeInventory()
        if (tiles.getLoadedMap() == farmMap) {
            lastTime = 0
            timePassing = true
        }
    } else {
        openInventory()
        timePassing = false
    }
})
/**
 * PLANT IDEAS:
 * 
 * 1. Self-spreading plant
 * 
 * 2. Tall plant (gets taller)
 * 
 * 3. Bubble plant (turns into diving helmet)
 * 
 * 4. Sprinkler plant (waters the soil around it)
 * 
 * 5. Jovial plant (says hello)
 * 
 * 6. Rude plant (insults you when it see you)
 * 
 * 7. Wanderer plant (walks around/follows random paths)
 * 
 * 8. Jumping plant (jumps)
 * 
 * 9. Companion plant (follows you around)
 * 
 * 10. Grabber plant (picks up things and sets them down)
 * 
 * 11. Scaredy plant (runs away from everything)
 * 
 * 12. Nomadic plant (picks up and replants other plants)
 * 
 * 13. Mole plant (turns grass around it into soil and tills it)
 * 
 * RECIPE IDEAS:
 * 
 * 1. Assistant: companion + grabber
 * 
 * 2. Auto tiller: mole + wanderer
 * 
 * 3. Friends: self-spreading + jovial
 * 
 * 4. Farmer: sprinkler + mole + wanderer + grabber
 */
spriteutils.createRenderable(100, function (screen2) {
    if (inventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 13)
        screen2.drawRect(10, 10, 140, 100, 14)
        images.print(screen2, "Inventory", 14, 14, 15)
images.print(screen2, sprites.readDataString(tools[selectedIndex], "name"), 72, 14, 11)
screen2.fillRect(14, 24, 132, 1, 15)
        tool_top = 28
        for (let index8 = 0; index8 <= tools.length - 1; index8++) {
            toolColumn = index8 % 6
            toolRow = Math.idiv(index8, 6)
            spriteutils.drawTransparentImage(tools[index8].image, screen2, 14 + toolColumn * 20, tool_top + toolRow * 20)
if (sprites.readDataNumber(tools[index8], "amount") > 1) {
                images.print(screen2, "" + sprites.readDataNumber(tools[index8], "amount"), 14 + toolColumn * 20 + 11, tool_top + toolRow * 20 + 9, 15)
            }
        }
        toolColumn = selectedIndex % 6
        toolRow = Math.idiv(selectedIndex, 6)
        spriteutils.drawTransparentImage(assets.image`selector`, screen2, 14 + toolColumn * 20 - 2, tool_top + toolRow * 20 - 2)
    }
})
function openInventory () {
    inventoryVisible = true
    controller.moveSprite(thePlayer, 0, 0)
    selectedIndex = 0
}
let farmMap: tiles.WorldMap = null
let projectile: Sprite = null
let inventoryVisible = false
let Shoot_direction = 0
let newTool: Sprite = null
let Nightstate = 0
let timePassing = false
let lastTime = 0
let tools: Sprite[] = []
let thePlayer: Sprite = null
let AHandTool: Sprite = null
let BHandTool: Sprite = null
let selectedIndex = 0
let tool_top = 0
let toolColumn = 0
let toolRow = 0
thePlayer = sprites.create(assets.image`Wizard`, SpriteKind.Player)
character.loopFrames(
thePlayer,
[img`
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    .....................1166....1166...........................
    .....................1166....1166...........................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    `,img`
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    .....................6611....6611...........................
    .....................6611....6611...........................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    ............................................................
    `],
5000,
character.rule(Predicate.NotMoving)
)
controller.moveSprite(thePlayer)
scene.cameraFollowSprite(thePlayer)
tiles.setCurrentTilemap(tilemap`level9`)
tiles.placeOnRandomTile(thePlayer, assets.tile`myTile2`)
tools = []
makeTool(assets.image`watering can`, "Magic ice shard", 1, false)
makeTool(assets.image`Fireball`, "Fireball", 1, false)
makeTool(assets.image`Lightningbolt`, "Lightning bolt ", 1, false)
makeTool(assets.image`gloves`, "Earth chunks", 1, false)
makeTool(assets.image`hatchet`, "hatchet", 1, false)
makeTool(assets.image`pickaxe`, "pickaxe", 1, false)
makeTool(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 . . . . . . . . . . . . 1 . 
    . . . . . . . . . . . . . . . . 
    `, "pillow", 1, false)
AHandTool = tools[2]
BHandTool = tools[7]
info.setScore(0)
let currentTime = 0
let REAL_WORLD_TIME_FOR_A_DAY = 300000
lastTime = 0
let dayState = "day"
timePassing = true
let specialInformation: number[] = []
if (timePassing && (Nightstate && tilemap`level12` == tilemap`level9`)) {
    tiles.setCurrentTilemap(tilemap`level16`)
}
game.onUpdate(function () {
	
})
game.onUpdateInterval(100, function () {
    for (let value15 of sprites.allOfKind(SpriteKind.Shopkeeper)) {
        if (spriteutils.distanceBetween(value15, thePlayer) < 48) {
        	
        } else if (spriteutils.distanceBetween(value15, thePlayer) > 100) {
            sprites.setDataBoolean(value15, "talking", false)
            story.cancelCurrentConversation()
        }
    }
})
