var morse_code = {
    ".-" : "A",
    "-..." : "B",
    "-.-." : "C",
    "-.." : "D",
    "." : "E",
    "..-." : "F",
    "--." : "G",
    "...." : "H",
    ".." : "I",
    ".---" : "J",
    "-.-" : "K",
    ".-.." : "L",
    "--" : "M",
    "-." : "N",
    "---" : "O",
    ".--." : "P",
    "--.-" : "Q",
    ".-." : "R",
    "..." : "S",
    "-" : "T",
    "..-" : "U",
    "...-" : "V",
    ".--" : "W",
    "-..-" : "X",
    "-.--" : "Y",
    "--.." : "Z"
}
var output = "";
var total = 0;

//Function for decoding the morse code
function decodeMorseCode(input,output,total){
    if(input.length == 0){
        var answer = document.createElement("p");
        answer.innerHTML = output;
        document.querySelector("#solutions").appendChild(answer);
    }
    else{
        for(var key in morse_code) {
            var value = morse_code[key];
            if(input.startsWith(key)){
                var decode = output + value;
                decodeMorseCode(input.replace(key,""),decode);
            }
        }
    }
}

// Add event listener function whenever the user clicks the submit button

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(){
    let node = document.querySelector("#solutions")
    if(node!=null){
        document.querySelector("#container").removeChild(node);
    }
    
    var input = document.getElementById("input-code");

    const temp = document.getElementsByTagName("template")[0];
    const item = temp.content.querySelector('#solutions');
    const solutionDiv = document.importNode(item, true);
    var title = solutionDiv.querySelector("#title");
    solutionDiv.appendChild(title);
    
    document.querySelector("#container").appendChild(solutionDiv);
    
    decodeMorseCode(input.value,output,total);
});

//Remove solutions whenever users clear or change the input
const textInput = document.getElementById("input-code");
textInput.addEventListener("input", function(){
    let node = document.querySelector("#solutions")
    if(node!=null){
        document.querySelector("#container").removeChild(node);
    }
   
});
