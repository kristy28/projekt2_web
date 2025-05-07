//Zvětšování obrázků
document.querySelectorAll('.zoomable').forEach(img =>{
  img.addEventListener('click', () =>{
    img.classList.toggle('zoomed');
  });
});


//Responsivnost odstavců/textu na šířku stránky
document.addEventListener("DOMContentLoaded", function (){
  let scriptActive = false;

  function initResponsiveParagraphs(){
    //Při velké šířce se ani nezobrazí seznam před odstavcem
    if (scriptActive || window.innerWidth > 992){
      return;
    } 
    
    const icons = document.querySelectorAll("i.fa-bars");
    //Zobrazení 1. odstavce <p> pod "i.fa-bars"
    icons.forEach(icon =>{
      let p = icon.nextElementSibling;
      while (p && p.tagName !== 'P'){
        p = p.nextElementSibling;
      }

      if (p){
        p.style.display = "none";
        icon.style.display = "inline-block";

        //Podmínka + zobrazení na click
        if (!icon.classList.contains("listener-added")){
          icon.addEventListener("click", () =>{
            p.style.display = (p.style.display === "none") ? "block" : "none";
          });
          icon.classList.add("listener-added");
        }
      }
    });

    scriptActive = true;
  }

  //Když je velká šířka, tak se text zobrazí "normálně"
  function resetParagraphs(){
    const icons = document.querySelectorAll("i.fa-bars");

    icons.forEach(icon =>{
      let p = icon.nextElementSibling;
      while(p && p.tagName !== 'P'){
        p = p.nextElementSibling;
      }

      if(p){
        p.style.display = "block";
      }

      icon.style.display = "none";
    });

    scriptActive = false;
  }

  //Kontrola velikosti
  if(window.innerWidth <= 992){
    initResponsiveParagraphs();
  }
  else{
    resetParagraphs();
  }

  //Reakce na každou změnu velikosti okna
  window.addEventListener("resize", () =>{
    if(window.innerWidth <= 992){
      initResponsiveParagraphs();
    }
    else{
      resetParagraphs();
    }
  });
});

  