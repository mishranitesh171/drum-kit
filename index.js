var randommunber= document.querySelectorAll(".drum").length;// to get length of drum class
for(var i=0;i<randommunber;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
// console.log(this.innerhtml);
// this.style.color="white";
var buttonInnerhtml=this.innerHTML;
makesound(buttonInnerhtml);
buttonanimation(buttonInnerhtml);
}

);}
// document.querySelector("button").addEventListener("click",function (){
//     alert("i got clicked");
// }
// ); 
//  document.addEventListener("keypress",function(){alert("key was press");});
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});



function makesound(key){
    switch (key) {
        case "w":
            var audio1=new Audio("sounds/tom-1.mp3");
    audio1.play();
            break;
            case "a":
                var audio2=new Audio("sounds/tom-2.mp3");
        audio2.play();
                break;
                case "s":
                    var audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
                    break;
                    case "d":
            var audio4=new Audio("sounds/tom-4.mp3");
    audio4.play();
            break;
            case "j":
                var audio5=new Audio("sounds/snare.mp3");
        audio5.play();
                break;
                case "k":
            var audio6=new Audio("sounds/crash.mp3");
    audio6.play();
            break;
            case "l":
            var audio7=new Audio("sounds/kick-bass.mp3");
    audio7.play();
            break;
        default:console.log(buttonInnerhtml);
            
    }
}
function buttonanimation(curentkey){
var activeButton=document.querySelector("."+curentkey)
activeButton.classList.add("pressed");//a pressed class has been added here



setTimeout (function() {
        activeButton.classList.remove("pressed");
},100
);


}