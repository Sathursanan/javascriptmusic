let number =document.querySelectorAll(".emoji").length;
for (let i = 0; i < number ; i++) {
    document.querySelectorAll(".emoji")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML);
    })
}
var song = null

document.addEventListener("keydown", function(event){
    console.log(event.key);
    makeSound(event.key);
})
function makeSound(key) {
if (song) {
    song.pause()
    song.currentTime = 0

}


switch(key) {
    case "H":
       song= new Audio("music/naan_pesadha.mp3");
      song.play(); 

      break;
    case "L":
       song = new Audio("music/Naan Kadhali Kadhalan Nee - Muththa Mazhai _ Chinmayi Sripada _ Tamil.mp3");
      song.play();
      break;
    case "S":
       song = new Audio("music/Psycho-Tamil-Neenga-Mudiyuma-Ringtone.mp3");
      song.play();
      break;
    default:
      console.log("click correct area");
        
    }
}
  