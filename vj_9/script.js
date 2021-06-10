//zadatak1
let niz = [10,20,30,40,50,60,70,80,90,100]; 
let slucajni = Math.round(((10)*Math.random()));
let noviNiz = niz.map(function(x) {return x * slucajni;});
console.log(noviNiz);
let izmedudvista = noviNiz.filter(function(y){
    if (y > 20 && y < 200)
                return y;
}
);
console.log(izmedudvista);

let zbrojiNiz=(izmedudvista.reduce(function(x,y){
	return x+y
}, 0));

console.log(zbrojiNiz);

let ispisNiz;
ispisNiz = `<ul> ${izmedudvista.map(broj => `<li>${broj}</li>`).join(" ")} <li><b>Zbroj: ${zbrojiNiz}</b></li><ul>`;

document.write(ispisNiz +"</br>");

//zadatak2 
let csstring = 'cascading style sheet';
let razdvoji = csstring.split(' '); 
let prvoSlovo = razdvoji[0];
let drugoSlovo = razdvoji[1];
let treceSlovo = razdvoji[2];
console.log(prvoSlovo+drugoSlovo+treceSlovo);
let prvoSlovoVeliko = prvoSlovo.charAt[0].toUpperCase();
let drugoSlovoVeliko = drugoSlovo.charAt[0].toUpperCase();
let treceSlovoVeliko = treceSlovo.charAt[0].toUpperCase();
console.log(prvoSlovoVeliko+drugoSlovoVeliko+treceSlovoVeliko);

//zadatak3
let bojica=/^#(([a-f0-9]{3})|([a-f0-9]{6}))$/;
let provjera=bojica.test("#aae31c")
console.log(provjera);

//zadatak4
var email = "ime_posiljatelja@nesto.com";
var regex = /^[a-z]+_[a-z]+@[a-z]+\.[a-z]{2,3}$/;  
if (email.match(regex))
{
document.write("email je u redu<br/>");
}
else
{
document.write("email nije u redu napisan<br/>");
}