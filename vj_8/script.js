//zadatak1
let min = 50;
let max = 100;
let slucajni;
function generatorBrojeva()
{
    let i;
    
    for (i = 0; i<15; i++)
    {
        slucajni = Math.round(((max-min)*Math.random())+min);
        console.log(slucajni);
        if(parnost(slucajni)==1)
            brojParnih();
        else
            brojNeparnih();
    }
    
    
}

function parnost()
{
    if ( slucajni % 2 == 0)
        return 1;
    else
        return 0;
}

function brojac() {
    let i = 0;
    return function() {
    return i++;
    };
}
    
let brojParnih = brojac();
let brojNeparnih = brojac();
generatorBrojeva();
console.log(brojParnih());
console.log(brojNeparnih());

//zadatak2
let rezultat = (ime) => (brojBodova) => (ukupniBodovi) =>  {
    return (" Iz kolegija " +  ime  +  " ostvarili ste "  + (brojBodova/ukupniBodovi*100).toFixed(2))
}


    
console.log(rezultat("MUP")(25)(35));