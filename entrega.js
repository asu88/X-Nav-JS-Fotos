
  function changer(){
    
    
    var element = document.getElementById("foto");
    

    var fotos = Array("http://bit.ly/1unaRGE","http://bit.ly/1KrMY4H","http://bit.ly/1A0LaN1");

    var foto = fotos[Math.floor(Math.random()*fotos.length)];
     
    element.innerHTML = '<img src ='+foto+'></img>';
    
    
    


  }
  
   		 changer();

