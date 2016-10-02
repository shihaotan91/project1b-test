//canvas

var ctx = document.getElementById("ctx").getContext("2d");

ctx.font = '40px Arial';

//player specs
// var x = 30;
// var spdX = 50;
// var y = 40;
// var spdY = 10;
// var name = 'P'

var player = {
x: 30,
spdX :50,
y: 40,
spdY: 10,
name: 'P',
}

//enemy specs
// var enemy_x = 130;
// var enemy_spdX = 30;
// var enemy_y = 80;
// var enemy_spdY = 20;
// var enemy_name = 'E'

var enemy = {
x: 130,
spdX :30,
y: 80,
spdY: 20,
name: 'E',
}

var enemy2 = {
x: 230,
spdX :40,
y: 100,
spdY: 70,
name: 'E',
}


//canvas size
var HEIGHT = 400
var WIDTH = 700

var message = 'bouncing'

// function updatePlayer(){
//   //player
//    player.x += player.spdX;
//    player.y += player.spdY;
//    ctx.fillText(player.name,player.x,player.y);
//    console.log('hello',player.x);
//
//    if(player.x > WIDTH || player.x < 0){
//    console.log(message);
//    player.spdX = -player.spdX
//    }
//    if(player.y > HEIGHT || player.y < 0){
//    console.log(message);
//    player.spdY = -player.spdY
//  }
// }

// function updateEnemy(){
//
//    //enemy
//    enemy.x += enemy.spdX;
//    enemy.y += enemy.spdY;
//    ctx.fillText(enemy.name,enemy.x,enemy.y);
//    console.log('hello',enemy.x)
//
//    if(enemy.x > WIDTH || enemy.x < 0){
//    console.log(message);
//    enemy.spdX = -enemy.spdX
//    }
//    if(enemy.y > HEIGHT || enemy.y < 0){
//    console.log(message);
//    enemy.spdY = -enemy.spdY
//   }
// }

function updateObject(object){

   //enemy
   object.x += object.spdX;
   object.y += object.spdY;
   ctx.fillText(object.name,object.x,object.y);
   console.log('hello',object.x)

   if(object.x > WIDTH || object.x < 0){
   console.log(message);
   object.spdX = -object.spdX
   }
   if(object.y > HEIGHT || object.y < 0){
   console.log(message);
   object.spdY = -object.spdY
  }
}

function update(){
updateObject(enemy);
updateObject(enemy2);
updateObject(player);
}

update();

setInterval(update,100);
