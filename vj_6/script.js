let pitanje = prompt("Upišite neki broj!.");
//zadatak sa if petljom
if(pitanje==0){
    console.log("unesena je nula");
    }
    else if(pitanje<10){
    console.Log("uneseni broj je manji od 10");
    }
    else{
    console.Log("uneseni broj je veći od 10");
    }

//zadatak sa tenarnim operatorom
let tenarni = (pitanje==0) ? "unesena je nula" : "nije unesena nula";
console.log(tenarni);
//zadatak sa switchom
mjesec="";
let mjesecIzborni = prompt("Upišite jedan od prvih 4 mjeseca u kalendarskoj godini.");
switch (mjesecIzborni) {
case "Sijecanj":
    mjesec = "Prvi mjesec";
    break;
case "Veljaca":
    mjesec = "Drugi mjesec";
    break;
case "Ozujak":
    mjesec = "Treci mjesec";
    break;
case "Travanj":
    mjesec = "Cetvrti mjesec";
    break;
default:
    mjesec = "Niste upisali neke od trazenih mjeseca";
}
console.log(mjesec);
//zadatak sa while petljom
let i = 5;
while ( i < 26){
    if (i % 2 == 0){
        console.log(i);
    }
    else{
        console.Log("Nije paran!")
    }
    i++;
}
//zadatak sa for petljom
let x;
let suma = 0;
for(x=0;x<181;x++){
    if (x % 50 == 0){
        console.log(x);
        suma += x
    }
    else{
        console.log("Taj broj nije djeljiv s 50");
    }
} 
console.log(suma); 