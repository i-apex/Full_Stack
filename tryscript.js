
const music = [];
var i=0;

function getInputValue(event) {
  
 
  // while(event.key!=Enter){
      let inputValue = document.getElementById("textInput1").value;
      music[i]= new Audio(inputValue);
      // music[i].play();
      i++;
  // }
}

  function playMusic(){
      for(var k=0;k<music.length;k++){
          music[k].play();
          setTimeout(remove,300);
        <video width="500px" height="500px" controls="controls">
         <source src="" type="video/mp4" />
         </video>
      }
  }

