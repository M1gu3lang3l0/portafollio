function cifrar(cadenaTexto)

{
  console.log(cadenaTexto);


  if (typeof cadenaTexto === "string") {
    var arrayTexto = cadenaTexto.split(" ");
    // Resto de tu código que utiliza la variable arrayTexto
  } else {
    console.log("cadenaTexto no es una cadena válida");
  }
    var caracteres = cadenaTexto.split("");


    for (var i = 0; i < caracteres.length; i++)
   {
     if (caracteres[i] === 'a') 
       {
        caracteres[i]='ai'
      
       }

       else if(caracteres[i] === 'e')
      
      {
        caracteres[i]='enter'
      } 

      else if(caracteres[i] === 'i')
      
      {
        caracteres[i]='imes'
      } 
      else if(caracteres[i] === 'o')
      {
        caracteres[i]='ober'
        
      }
      else if(caracteres[i] === 'u')
      {
        caracteres[i]='ufat'
        
      }
     
     
  }
  return caracteres.join("");
 
}


// uso de expresiones regulares

function decifrar(cadenaTexto)
 {
    //El método replace() no modifica la cadena original, sino que devuelve una nueva cadena con las sustituciones realizadas.
      cadenaTexto = cadenaTexto.replace(/ai/g, 'a')
                   .replace(/enter/g,'e')
                   .replace(/imes/g,'i')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g,'u');

      return cadenaTexto;
}

/*
let cadena="hola como estas bien";
var mustra=cifrar(cadena);
console.log(mustra);
//let cadenaDecifra="hoberlai cobermober enterstais"
let cadenaDecifra="hoberlai cobermober enterstais bimesentern"
var decifraTexto=descifrar(cadenaDecifra);
console.log(decifraTexto);*/


// var textarea = document.getElementById("textarea").value;
 var msj;
 var textarea;
 
  function capturaTextocifrar()
  {
    textarea =document.querySelector("#textarea").value;
    
    msj=cifrar(textarea);
    
    muestraTexto();
    
    //document.getElementById("textareaCifrado").value = msj;
  }

  
  function muestraTexto()
  {
    document.getElementById("textareaCifrado").value = msj;
    document.getElementById("textareaCifrado").value;
    var mensaje= document.getElementById("textareaCifrado");
    mensaje.style.backgroundImage="none";

  }

  function capturaTextodecifrar()
  {
    textarea =document.querySelector("#textarea").value;
    msj=decifrar(textarea);
    muestraTexto();
  }


  function copiarTexto() {
     textarea = document.getElementById("textareaCifrado");
    navigator.clipboard.writeText(textarea.value)
        .then(function() {
            alert("Texto copiado al portapapeles: " + textarea.value);
        })
        .catch(function(error) {
            console.error("Error al copiar el texto: ", error);
        });
      }



 