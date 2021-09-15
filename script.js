let rightarrow = document.getElementById("rightarrow")
let leftarrow = document.getElementById("leftarrow")
let distance = 0;
let slider = document.getElementsByClassName("slider")[0]
let rightcomment = document.getElementById("rightcomment")
let leftcomment = document.getElementById("leftcomment")
let pairs = document.getElementsByClassName("pair")
console.log(rightarrow, leftarrow);
rightarrow.onclick = function(){
    console.log(680426586)
    distance = distance + 100
    if (distance == 300){
        distance = 0
    }

    console.log(distance)
    slider.style.transform = "translateX(-"+distance+"%)";
}

leftarrow.onclick = function(){
    console.log(680426586)
    distance = distance - 100
    console.log(distance)
   
    if (distance == -100){
        distance = 200
    }
    slider.style.transform = "translateX(-"+distance+"%)";

}

rightcomment.onclick = function(){
    console.log(2936214)
    let activePair = document.getElementsByClassName("activePair")[0]
 activePair.classList.remove("activePair")
 let nextPair = activePair.nextElementSibling;
 if (nextPair.classList[0] == "sliderButtons"){
     nextPair = pairs[0]
 }
 setTimeout(function(){
    nextPair.classList.add("activePair") 
 },300)
}
leftcomment.onclick = function(){
    console.log(2936214)
    let activePair = document.getElementsByClassName("activePair")[0]
    activePair.classList.remove("activePair")
    let previousPair 
    if (activePair.previousElementSibling){
        previousPair = activePair.previousElementSibling;
    }
    else {
    previousPair = pairs[2]
    }
    setTimeout(function(){
        previousPair.classList.add("activePair")
    },300)
}



