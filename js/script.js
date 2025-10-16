//JS Testing
//Variables and Data Types

let team = "Guardians";

const sport = "Baseball";

let player = {
    "name": "Jose Ramirez",
    "position": "3rd Base",
    "avg": "0.283"
};

player.gamesPlayed = 10;

console.log(player.name,", ", player.position,", ", player.avg,", ", player.gamesPlayed,);

//JS Arrays
let favFoods = ["Cheeseburger", "Pizza", "Tacos", "Salad"];

readThrough(favFoods);

favFoods[3] = "Chicken";

favFoods.pop();

readThrough(favFoods)


function readThrough(array) {
    let i = 0;

    while(i != array.length) {
        console.log(array[i]);
        i++;
    };
};

//Functions and Loops


const mySongs = ["Blinding Lights", "Painted You Pretty", "Better Year"];

for (let i = 0; i < mySongs.length; i++) {
  console.log(`${mySongs[i]} is a jam!`);
}

rateSong("Blinding Lights", 3);
rateSong("Better Year", 5);

function rateSong(songName, rating) {
  if (rating === 5) {
    console.log(`${songName} is amazing! A perfect score!`);
  } else if (rating >= 4) {
    console.log(`${songName} is great! I'd listen to it again.`);
  } else if (rating >= 3) {
    console.log(`${songName} is decent, but not my favorite.`);
  } else if (rating >= 2) {
    console.log(`${songName} needs some improvement.`);
  } else {
    console.log(`${songName} was not my vibe at all.`);
  }
}