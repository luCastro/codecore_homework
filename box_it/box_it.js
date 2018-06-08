

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
    let lastIndex = array.length -1;
    let number = array[0].length;
    let name="";

    for(name of array) {
        if(number < name.length) {
            number = name.length;
        }
    }

    for(name of array){
        if(name === array[0]){
            name = name + " ".repeat(number - name.length);
            string = drawTopBorder(number)+ "\n" + drawBarsAround(name) +"\n";
        }
        else if(name === array[lastIndex]){
            name = name + " ".repeat(number - name.length);
            string += drawMiddleBorder(number)+ "\n" + drawBarsAround(name) +"\n" + drawBottomBorder(number);
        }else {
            name = name + " ".repeat(number - name.length);
            string += drawMiddleBorder(number)+ "\n" + drawBarsAround(name) +"\n";
        }
    }
    return string;
}

console.log(boxIt(["Luciana Castro", "Julio Cunha", "Gustavo Cunha", "Luciana Castro Silva"]));


