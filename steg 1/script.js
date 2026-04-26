var content;
var input;
const basedir = "guest@kroaxys.xyz:";
var dir = "guest@kroaxys.xyz:~$ ";
var helpJSON = "";
var commandsJSON = "";
var dsJSON = "";

const functions = {
    cd: cd,
    ls: ls,
    help: help,
    nano: nano
}

document.addEventListener("DOMContentLoaded", function () {
    content = document.getElementById("content")
    addNewLine();
    getJson();

    async function getJson(){
        let response = await fetch("assets/json/help.json");
        helpJSON = await response.json();
        response = await fetch("assets/json/commands.json")
        commandsJSON = await response.json();
        response = await fetch("assets/json/DirectoryStructure.json")
        dsJSON = await response.json();
        console.log(commandsJSON)
        console.log(helpJSON)
        console.log(dsJSON.length)
        console.log(dsJSON)
        console.log(helpJSON[0].command)
        console.log(commandsJSON.length)
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

function cd (obj){
    test();
    console.log(obj)
    let valid
    let i = 0;
    let z = 0;
    let arrayint = 0;
    const dircomponents = [];
    let finaldir;

    if (obj.charAt(0)== "/" && obj.charAt(obj.length-1) == "/")
    {
        obj = obj.slice(1,obj.length-1)
        valid = true
    }
    
    if (valid == true) {
        obj = obj.split("/")
        console.log(obj)
        console.log(obj.length)
    }
    
    
    while (i<dsJSON.length && z<obj.length){
        console.log(obj[z]+","+dsJSON[i].first)
        console.log(dsJSON.length)
        if (obj[z] === dsJSON[i].first){
            z++
            //dircomponents[arrayint] = obj[i];
            //arrayint++
            objectKeys = Object.keys(dsJSON[i])
            console.log(objectKeys)
            console.log("////")
            console.log(dsJSON[i][objectKeys])
            console.log("////")
            console.log(dsJSON[i][objectKeys[1]])
            console.log(dsJSON[i][objectKeys[1]].length)
            let x = 0;
            //console.log(dircomponents);
            //while (x<dsJSON[i][objectKeys[z]])
            if (z<obj.length){
                while (x<dsJSON[i][objectKeys[z]].length){
                    if (obj[z] === dsJSON[i][objectKeys[z]]) {

                    }
                }
            }
            else {break}


        }
        i++
    }

}

function ls (){

}

function help (){

}

function nano (){

}

function test (obj){
    console.log("Testing Response")
}

function addNewLine() {
    let basep = document.createElement("p")
    input = document.createElement("p")
    let div = document.createElement("div")
    basep.textContent = dir + " "
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

    
    while (i<commandsJSON.length) {
        console.log("WhileLoop")
        if (obj.startsWith(commandsJSON[i].command+" ")){
            let fullcommand = commandsJSON[i].command+" "
            let remainingString = obj.slice(fullcommand.length)

            functions[commandsJSON[i].command](remainingString)
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
        for (let i = 0; i < helpJSON.length; i++){
            //let div = document.createElement("div")
            let p = document.createElement("p")
            p.textContent = helpJSON[i].command + "," + helpJSON[i].binding
            content.append(p)
        }
    }
}