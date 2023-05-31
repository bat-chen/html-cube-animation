var cube = document.querySelector('.cube');
var currentClass = '';
var temp = '';


console.log(cube);

document.getElementById("throw").addEventListener("click", changeSide);


function createRandomNumber(){
    var random_number = Math.floor(Math.random() * 6) + 1;
    var wing = '';
    
    if(random_number == 1){
        wing = "front";
    }
    else if (random_number == 2){
        wing = "back";
    }
    else if (random_number == 3){
        wing = "right";
    }
    else if (random_number == 4){
        wing = "left";
    }
    else if (random_number == 5){
        wing = "top";
    }
    else{
        wing = "bottom";
    }

    return wing;
}


 function changeSide() {

    var cubeWing = createRandomNumber()
    console.log(cubeWing);
    var showClass = 'show-' + cubeWing;
   
      if ( currentClass ) {    
        cube.classList.remove( currentClass );
      }

     
      if(currentClass == showClass){
        console.log('---->',currentClass,showClass);
        showClass = 'show-fullSpin';
        cube.classList.remove( currentClass );
        
      }
      

      cube.classList.add( showClass );
      currentClass = showClass;

    
      
 }

