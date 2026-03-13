var content;
var input;


document.addEventListener("DOMContentLoaded", function(){
    content = document.getElementById("content")
    addNewLine();

    document.addEventListener("keydown",function(event){

        if (event.key.length==1){
            input.textContent += event.key
        }
        else if(event.key=="Backspace"){
            input.textContent = input.textContent.slice(0,-1);
        }
        else if(event.key=="Enter"){
            addNewLine();
        }
    })
})

function addNewLine (){
    let basep = document.createElement("p")
    input = document.createElement("p")
    let div = document.createElement("div")
    basep.textContent="guest@kroaxys.xyz:~$"
    div.classList.add("generatedDiv")
    content.append(div);
    div.append(basep);
    div.append(input);
    input.scrollIntoView({ behavior:"instant", block:"start" })
}