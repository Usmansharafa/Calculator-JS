var x = prompt("Enter First Number");
var z = prompt("Enter Second Number");
var y = prompt("Enter an Operator like '+','-','*','/'");
x = Number(x);
z = Number(z);
switch(y){
  case "+":
    answer = x + z;
    break;
  case "-":
    answer = x - z;
    break;
  case "/":
    answer = x / z;
    break;
  case "*":
    answer = x * z;
    break;
  default:
    answer = "Operation cannot be performed"
}
alert(answer);
