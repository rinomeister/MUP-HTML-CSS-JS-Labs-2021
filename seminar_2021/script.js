function kvizic(){
  let odgovor=0;
  let odgovorDrugi=0;
  let p1=document.quiz.pitanje1.value;
  let p2=document.quiz.pitanje2.value;

  if(p1=="More"){
      odgovor = "Half day tour";
  }
  else if (p1=="Rijeka"){
      odgovor = "Kayaking tour";
  }
  else if (p1=="Spilja"){
      odgovor = "Full day tour";
  }

  document.write("Vama bi najvise odgovoralo: ", odgovor, "</br>");
  if(p2=="Kajaking"){
    odgovorDrugi = "Popust na kajaking tour";
  }
  else if (p2=="Ronjenje"){
    odgovorDrugi = "Popust na full day tour";
  }
  else if (p2=="Plivanje"){
    odgovorDrugi = "Popust na half day tour";
  }
  document.write("Vama cemo pokloniti popust na: ", odgovor);
}
