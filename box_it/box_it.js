

function drawLine(number) {   
    let result = "━".repeat(number);      
    return result;
}

function drawTopBorder(number) {

    let topLeft = "┏";
    let topright = "┓";
    return topLeft + drawLine(number) + topright;
}

function drawMiddleBorder(number) {
    
    let middleLeft = "┣";
    let middleright = "┫";
    return middleLeft + drawLine(number) + middleright;
}

function drawBottomBorder(number) {
    let bottomLeft = "┗";
    let bottomright = "┛";
    return bottomLeft + drawLine(number) +bottomright;
}

function drawBarsAround(string) {
    return `|${string}|`;
}


function boxIt(array) {
    let string = "";
    let number = 0;

    for(name of array) {
        if(number < name.length) {
            number = name.length;
        }
    }

    string += drawTopBorder(number) +"\n";
    
    for(let i =0; i < array.length; i++){  

        let name = array[i];

        name = name + " ".repeat(number - name.length);

        string +=  drawBarsAround(name) +"\n"; 

        if(i !== array.length -1){
        
            string += drawMiddleBorder(number)+ "\n";   
    }
    
    }
    string += drawBottomBorder(number);
    return string;
}



console.log(boxIt(["Luciana Castro", "Julio Cunha", "Gustavo Cunha", "Luciana Castro Silva"]));

console.log(boxIt([]));

