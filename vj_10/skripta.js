let botuncic = document.getElementById("posalji");
botuncic.addEventListener("click", function(){
    document.getElementById("ispis").innerHTML = "<br>" +
    document.getElementById("ime").value + ", " + 
    document.getElementById("datum").value + ", " +
    document.getElementById("broj").value + ", " + 
    document.getElementById("mail").value + ", " +
    document.getElementsByClassName("spol").value + ", " + 
    document.getElementById("gadgetic").value + ", " + 
    document.querySelector("#mail").value + ", ";
});






 
