var content;
var input;
var dir = "guest@kroaxys.xyz:~$ ";
var help = "";
var commands = "";

const functions = {
    cd: cd,
    ls: ls
}

document.addEventListener("DOMContentLoaded", function () {
    content = document.getElementById("content")
    addNewLine();
    getJson();

    async function getJson(){
        let response = await fetch("assets/json/help.json");
        help = await response.json();
        response = await fetch("assets/json/commands.json")
        commands = await response.json();
        console.log(commands)
        console.log(help)
        console.log(help[0].command)
        console.log(commands.length)
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

function cd (){
    test();
}

function ls (){

}

function help (){

}

function test (){
    console.log("Testing Response")
}

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
    let i = 0;

    //Change logic. Make it not dependent on hard coded code. Make it look in a json file to see if it exist and then execute.
    //Make different arrays, they should include all file paths. cd array, ls array.
    //Loop(if obj.includes arrays.main[i] then loop)

    //start with

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

    // if(obj.includes(array.commands[i])) {
    //    if(obj.includes(array.commands[i].subcommand[n])){

    //    }
    // }

    
    while (i<commands.length) {
        console.log("WhileLoop")
        if (obj.startsWith(commands[i].command)){
            functions[commands[i].command]()
        }
        i++;
    }

    // if (obj.includes("cd")) {

    //     if (obj == "cd /tag/") {
    //         let test = "cd"
    //         dir = "guest@kroaxys.xyz:/tag$"
    //         addNewLine();
    //         functions[test]()
    //     }
    //     else {
    //         addNewLine();
    //         console.log("Error")
    //     }
    // }

    // else if (obj.includes("ls")) {
    //     if (obj == "ls /tag/") { }
    // }

    // else if (obj.includes("help")){
    //     if (obj == "help") {
    //         commandoutput("help")
    //         addNewLine();
    //     }
        
    //     else if (obj == "") {}
    // }

    // else {
    //     addNewLine();
    // }
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