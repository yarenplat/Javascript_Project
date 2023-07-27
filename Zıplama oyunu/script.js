var rabbit=document.getElementById("rabbit");
var kaktus=document.getElementById("kaktus");

function jump(){
    if(rabbit.classList!="jump"){
        rabbit.classList.add("jump");
    
        setTimeout(function(){
          rabbit.classList.remove("jump");
         },300)
    }
}

var isAlive=setInterval(function(){
    var rabbittop=parseInt(window.getComputedStyle(rabbit).getPropertyValue("top"))

    var kaktusleft=parseInt(
        window.getComputedStyle(kaktus).getPropertyValue("left")
    );

    if(kaktusleft<50&&kaktusleft > 0 && rabbittop >= 140){
        alert("oyun bitti...")
    }


},10)

document.addEventListener("keydown",function(event){
    jump();

})