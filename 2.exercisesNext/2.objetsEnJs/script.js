let npc = {
    name: "Oberyn",
    age: 28,
    items_to_give: ["Wooden sword", "Knife", "Crossbow"],
    giveItem: function() {
        let randomWeapon = Math.floor(Math.random() * npc.items_to_give.length)
        npc.items_to_give.splice(randomWeapon, 1)
    }         
}

for (const key in npc) {
    console.log(npc[key])
}

npc.giveItem()
console.log(npc)

let shop = {
    itemToSell: [
        { 
            title: "Wooden sword", 
            physic: 5, 
            magic: 0, 
            minLevel: 1, 
            available: true,
            description: "Even the greatest warriors started with this.",
        },
        { 
            title: "Knife", 
            physic: 10, 
            magic: 0, 
            minLevel: 2, 
            available: true,
            description: "It's stabby time!",
        },
        {
            title: "Crossbow",
            physic: 15,
            magic: 0,
            minLevel: 5,
            available: true,
            description: "Aim for the knee, we need more guards.",
        },
        {
            title: "Magic book",
            physic: 0,
            magic: 15,
            minLevel: 5,
            available: true,
            description: "Wanna learn magic?",
        },
        {
            title: "Harpe",
            physic: 9999,
            magic: 9999,
            minLevel: 100,
            available: false,
            description: "It is said this sword is powerful enough to hurt mythical beings.",
        },
    ],

    Items: function() {
        this.itemToSell.forEach(e => {
        console.log(e)
        })
    },

    availableItems: function() {
        this.itemToSell.forEach(e => {
        if (e.available) console.log(e)
        })
    },

    levelItems: function() {
        this.itemToSell.forEach(e => {
        if (e.minLevel > 10) console.log(e)
        })
    }
}

for (const key in shop) {
    console.log(shop[key])
}

let mainCharacter = {
    name: "Saitama",
    alias: "Caped Baldy",
    level: 100,
    life: 9999,
    weapon: { "name": "Punch", "damage": 9999 },
    attack: () => {
        console.log(mainCharacter.name + " attacks with his " + mainCharacter.weapon.name + " for " + (mainCharacter.level * mainCharacter.weapon.damage) + " damages.")
    }
}

for (const key in mainCharacter) {
    console.log(mainCharacter[key])
}

mainCharacter.attack()