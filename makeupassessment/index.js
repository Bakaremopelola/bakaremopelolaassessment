//const btn= document.getElementById("btn")
//colors ["#8E44AD","#3498DB","#1ABC9C","F1C40F","#839192","#FF0096","#15FF00"];
//var a = document.querySelector("ass");
//var b = document.querySelector("btn");
//b.addEventListener("click",changeColor);

//function changeColor(){
   // for (let i=0; i<color.lenght;i++)

//{
//a.computedStyleMap.backgroundColor=colors[i]
//}
//}

let colors = ["Red", "Blue", "Hotpink", "Magenta", "Yellow", "Black", "Green", "Orange", "Indigo", "Purple"]
let clickButton = document.querySelector("#btn");
let counter = 0;
let changeColor= ()=>{
    let change = colors[counter];
    counter++;
    document.body.style.backgroundColor = change;
    if(counter>colors.length-1){
        counter=0;
    };
};
clickButton.addEventListener("click", ()=>{
    changeColor();

});