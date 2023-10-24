
for(var i=0;i<(document.querySelectorAll(".drum").length);i++){


    document.querySelectorAll(".drum")[i].addEventListener("click",click);
    document.addEventListener("keydown",function(){
        keyboardclick(event.key)
        keyanimation(event.key);

    });

}


//it listens to the event click and then click function is executed

function click(){
    
    var buttonInnerHTML= this.innerHTML;
    keyboardclick(buttonInnerHTML);
    keyanimation(buttonInnerHTML);
}


function keyboardclick(key){

    switch(key){

    case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;   

        case "k":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        default:
            console.log("hi");
        
    }
}

function keyanimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);

   activeButton.classList.add("pressed"); 

   setTimeout(remove,100);

    function remove(){activeButton.classList.remove("pressed");}
}

//concatenation is needed of dot as all inputs are strings