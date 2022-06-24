var num1 = prompt("Insert a number");var operation = prompt("Select an operation \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division");
var num2 = prompt("Insert another number");

if (operation == '1') {
    alert("Answer: " +(+num1 + + num2));
}
else if (operation == '2'){
    alert("Answer: " +(num1 - num2))
}
else if (operation == '3'){
    alert("Answer: " +(num1 * num2))
}
else if (operation == '4'){
    alert("Answer: " +(num1 / num2))
}
else{
    document.write("Insert a number")
}