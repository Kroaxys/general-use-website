var content;
var input;
var dir = "guest@kroaxys.xyz:~$ ";
var help = "";

document.addEventListener("DOMContentLoaded", function () {
    content = document.getElementById("content")
    addNewLine();
    getJson();

    async function getJson(){
        const response = await fetch("assets/json/help.json");
        help = await response.json();
        console.log(help)
        console.log(help[0].command)
    }

    document.addEventListener("keydown", function (event) {

        if (event.key.length == 1) {
            input.textContent += event.key
        }
        else if (event.key == "Backspace") {
            input.textContent = input.textContent.slice(0, -1);
        }
        else if (event.key == "Enter") {
            if (input.textContent.length != 0) {
                checkcommand(input.textContent);
            }
            else {
                addNewLine();
            }
        }
    })
})

function addNewLine() {
    let basep = document.createElement("p")
    input = document.createElement("p")
    let div = document.createElement("div")
    basep.textContent = dir
    div.classList.add("generatedDiv")
    content.append(div);
    div.append(basep);
    div.append(input);
    input.scrollIntoView({ behavior: "instant", block: "start" })
}

function checkcommand(obj) {
    console.log(obj)

    if (obj.includes("cd")) {

        if (obj == "cd /tag/") {
            dir = "guest@kroaxys.xyz:/tag$"
        }
        else if (obj == "/help/") { }
        else {
            addNewLine();
        }
    }

    else if (obj.includes("ls")) {
        if (obj == "ls /tag/") { }
    }

    else if (obj.includes("help")){
        if (obj == "help") {
            commandoutput("help")
            addNewLine();
        }
        
        else if (obj == "") {}
    }

    else {
        addNewLine();
    }
}

function commandoutput(obj) {
    if (obj == "help"){
        for (let i = 0; i < help.length; i++){
            //let div = document.createElement("div")
            let p = document.createElement("p")
            p.textContent = help[i].command + "," + help[i].binding
            content.append(p)
        }
    }
}