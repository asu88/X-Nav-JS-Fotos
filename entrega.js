
  function setFoto(id, value){
    
   var element = document.getElementById(id); 
   element.innerHTML = value;

    
    
    }
  
   
    function photosRandom(){

         var fotos = ["http://bit.ly/1unaRGE","http://bit.ly/1KrMY4H","http://bit.ly/1A0LaN1",
         "http://bit.ly/1A2IyhA","http://bit.ly/1A2IVsw","http://bit.ly/1yUEUlF",
         "http://bit.ly/1AGWjE3","http://bit.ly/1vxYfNB","http://bit.ly/1zu4ktX"];
         var foto = fotos[Math.floor(Math.random()*fotos.length)];
        
        var NewValue = '<img src ='+foto+' with=80% height=70%></img>';
        setFoto("foto", NewValue);
}
