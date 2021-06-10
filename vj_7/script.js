//1.zadatak
function ispis()
{
  let i;
  let duljina = arguments.length;
  for (i = 0;i<duljina;i++)
  {
      console.log(arguments[i]);
  }
}
ispis(3,4,5);

//2.zadatak
let zbrajanje = function(x,y)
{return x + y};
console.log(zbrajanje(2,3));

let mnozenje = function(a,b)
{return a * b};
console.log(mnozenje(2,3));
//3.znak
let num1;
let num2;
let rezultat;
let znak = prompt("Unesite znak operacije!");
function ath(num1,num2,func)
{console.log(func(num1,num2))};


if(znak =='+')
{
    ath(1,2,function(num1,num2){return num1 + num2});
   
}
else if(znak == '-' )
{
    ath(1,2,function(num1,num2){return num1 - num2});
    
}
else if(znak == '*')
{
    ath(1,2,function(num1,num2){return num1 * num2});
    
}
else if(znak == '/')
{
    ath(1,2,function(num1,num2){return num1 / num2});
    
}
else
{
    console.log("Nije unesen dobar znak!");
}