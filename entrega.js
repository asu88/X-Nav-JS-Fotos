
  var ran = function photosRandom(id){
    
    
    var element = document.getElementById(id);
    var urls = ["http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Metro_SPB_Line3_Obukhovo.jpg/1024px-Metro_SPB_Line3_Obukhovo.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Postsparkasse_Otto_Wagner_Beamtenstiege_2.JPG/640px-Postsparkasse_Otto_Wagner_Beamtenstiege_2.JPG","http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Catedral%2C_Gniezno%2C_Polonia%2C_2012-12-24%2C_DD_01.jpg/1280px-Catedral%2C_Gniezno%2C_Polonia%2C_2012-12-24%2C_DD_01.jpg"];
    
    
   // var string = element.innerHTML;
      // console.log("array " + string.split("+"));
    //var operador = string.split("+");
    //var resultado = parseInt(operador[0]) + parseInt (operador[1]);
     //  console.log(resultado);
    // element.innerHTML = resultado;
     
    element.innerHTML = '<img src ='+urls[1]+'></img>';
    
    
    //elem2.innerHTML =  " = "+resultado;


  }
  
   		 ran("foto");

  	
  //gresy Forg
