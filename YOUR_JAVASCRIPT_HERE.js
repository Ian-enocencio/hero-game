// Write your JS here

/* -------------------------
Hero Object
---------------------------*/
const hero = {
    name: 'naruto',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2,
    }
}


/* ----------------------------------------------------------------------
                            Game logic functions
-------------------------------------------------------------------------*/

// ----------rest

function rest (hero) {

   hero.health = 10;

   return hero
}

// ---------- Picking up items 

function pickUpItem  (hero) {

}

//---------- equip weapon 
function equipWeapon (hero) {

}

/* ------------------------- ------------------------------------
                            UI for rest
------------------------------------------------------------*/

// const innRest = document.getElementById('inn')
// if (true) {
//     document.write('no element');
// }
hero.health = 8 
document.getElementById('inn').click(hero.health = 10)



