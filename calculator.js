//to append 
let display = document.getElementById("display");

function appendTpDisplay(input){
    display.value += input
}

//clear
function clearDisplay() {
    display.value=''
}

//result
function calc(){
    try{
        let expression = display.value.replace(/x/g, "*");
        display.value= eval(expression)

    }
    catch{
            display.value="Error"
    }
}

    


