let rightarrow = document.getElementById("rightarrow")
let leftarrow = document.getElementById("leftarrow")
let distance = 0;
let slider = document.getElementsByClassName("slider")[0]
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