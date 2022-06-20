var x = prompt("Enter First Number");
var z = prompt("Enter Second Number");
var y = prompt("Enter an Operator like '+','-','*','/'");
x = Number(x);
z = Number(z);
switch(y){
  case "+":
    answer = x + z;
    alert(answer);
    break;
  case "-":
    answer = x - z;
    alert(answer);
    break;
  case "/":
    answer = x / z;
    alert(answer);
    break;
  case "*":
    answer = x * z;
    alert(answer);
    break;
  default:
    alert("Operation cannot be performed")
}
