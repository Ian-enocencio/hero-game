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

const MockAlert = {
    install: function() {
        MockAlert.message = undefined;
        MockAlert.originalAlert = window.alert;

        window.alert = function(message) {
            MockAlert.message = message;
        }
    },

    unistall: function() {
        window.alert = MockAlertoriginAlert;
    }
}

MockAlert.install()
rest(hero)
MockAlert.unistall()
// ---------- Picking up items 

function pickUpItem  (hero) {


}

//---------- equip weapon 
function equipWeapon (hero) {
    
    const testHero = { weapon: {type: 'sword', damage: 5}, inventory: [{ type: 'dagger', damage: 2}]}
    const testWeapon = tesHero.inventory[0]
    equipWeapon(testHero)
    console.log(testHero);

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



