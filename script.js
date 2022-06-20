//Give a space between your expression
var expression = prompt("Enter an expression");
var x,y,z;
var answer;
[x,y,z] = expression.split(" ");
x = Number(x);
z = Number(z);
switch(y){
   case "+":
        answer = x + z;
        console.log(answer);
        break;
   case "-":
        answer = x - z;
        console.log(answer);
        break;
   case "*":
        answer = x * z;
        console.log(answer);
        break;
   case "/":
        answer = x / z;
        console.log(answer);
        break;
   default:
        console.log("Operation cannot be performed")
}
