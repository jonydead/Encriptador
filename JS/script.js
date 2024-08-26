//encriptar texto con validaciones de mayusculas, caracteres especiales y acentos

function encriptar(){
    //obteniendo la cadena de texto
    var texto = document.getElementById("codigo_escrito").value;
    console.log(texto);

    //separando la cadena de texto
    var separador = texto.split(""); 

    console.log(separador);

    if(separador.length < 1){
        Swal.fire({
            icon: 'info',
            title: 'Recuerde',
            text: 'Debe ingresar almenos un caracter para poder realizar la encriptacion del texto',
            confirmButtonColor: '#0A3871',
            confirmButtonText: 'Entiendo'
        })
    }else{
        for(var i= 0; i < separador.length; i++ ){
            //console.log(separador[i]);
            if(separador[i] === "á" || separador[i] === "é" || separador[i] === "í" || separador[i] === "ó" || separador[i] === "ú"){
            console.log("Error!! Prohibido el uso de acentos");
            Swal.fire({
                icon: 'error',
                title: 'Vaya error',
                text: 'Recuerde, que esta prohibido el uso de acentos',
                confirmButtonColor: '#0A3871',
                confirmButtonText: 'Entiendo'
            })  
            break;
            }
    
            if(separador[i].match(/[A-Z]/)){
                console.log("Error!! Prohibido el uso de Mayusculas");
                Swal.fire({
                    icon: 'error',
                    title: 'Vaya error',
                    text: 'Recuerde, que esta prohibido el uso de mayusculas',
                    confirmButtonColor: '#0A3871',
                    confirmButtonText: 'Entiendo'
                }) 
                break;
            }
            
            if(separador[i].match(/[.*+\-?^${}()|[\]\\]/g)){
                console.log("Error!! encontrado caracter espcial "+ separador[i]);
                Swal.fire({
                    icon: 'error',
                    title: 'Vaya error',
                    text: 'Se ha encontrado el siguiente caracter especial "'+ separador[i] + '", por tanto, no se puede encriptar el texto',
                    confirmButtonColor: '#0A3871',
                    confirmButtonText: 'Entiendo'
                })
                break;
            }  
    
            separador[i] = separador[i].replace("i", "imes")
            separador[i] = separador[i].replace("a", "ai")
            separador[i] = separador[i].replace("e", "enter")
            separador[i] = separador[i].replace("o", "ober")
            separador[i] = separador[i].replace("u", "ufat")
            
        }
    }

    console.log(separador);
    
    //se empieza a crear la cadena de texto
    var textoEncriptado = separador.join("");

    document.getElementById("encriptado").value = textoEncriptado;

}

function desencriptar(){

    //obteniendo la cadena de texto
    var texto = document.getElementById("codigo_escrito").value;
    console.log(texto);

    //separando la cadena de texto
    var separador = texto.split(""); 

    //console.log(separador);
    if(separador.length < 1){
        Swal.fire({
            icon: 'info',
            title: 'Recuerde',
            text: 'Debe ingresar almenos un caracter para poder realizar la desencriptacion del texto',
            confirmButtonColor: '#0A3871',
            confirmButtonText: 'Entiendo'
        }) 
    }else{
        for(var i= 0;i < separador.length; i++ ){

            //console.log(separador[i]);
            if(separador[i] === "á" || separador[i] === "é" || separador[i] === "í" || separador[i] === "ó" || separador[i] === "ú"){
            console.log("Error!! Prohibido el uso de acentos");
            Swal.fire({
                icon: 'error',
                title: 'Vaya error',
                text: 'Recuerde, que esta prohibido el uso de acentos',
                confirmButtonColor: '#0A3871',
                confirmButtonText: 'Entiendo'
            })    
            break;
            }

            if(separador[i].match(/[A-Z]/)){
                console.log("Error!! Prohibido el uso de Mayusculas");
                Swal.fire({
                    icon: 'error',
                    title: 'Vaya error',
                    text: 'Recuerde, que esta prohibido el uso de mayusculas',
                    confirmButtonColor: '#0A3871',
                    confirmButtonText: 'Entiendo'
                }) 
                break;
            }
            
            if(separador[i].match(/[.*+\-?^${}()|[\]\\]/g)){
                console.log("Error!! encontrado caracter especial "+ separador[i]);
                Swal.fire({
                    icon: 'error',
                    title: 'Vaya error',
                    text: 'Se ha encontrado el siguiente caracter especial "'+ separador[i] + '", por tanto, no se puede encriptar el texto',
                    confirmButtonColor: '#0A3871',
                    confirmButtonText: 'Entiendo'
                })
                break;
            }

            if(i === (separador.length - 1)){

                texto = texto.replaceAll("imes", "i");
                texto = texto.replaceAll("ai", "a");
                texto = texto.replaceAll("enter", "e");
                texto = texto.replaceAll("ober", "o");
                texto = texto.replaceAll("ufat", "u");

            }
            
        }
    }    

    console.log(texto);

    //se empieza a crear la cadena de texto
    var textoDesencriptado = texto;

    document.getElementById("encriptado").value = textoDesencriptado;

        
}


function esconderLayout(){
    var frame5 = document.getElementById('frame5');
    var muneco = document.getElementById('muneco');
    var rectangle = document.getElementById('rectangle');
    var rectangle1 = document.getElementById('rectangle1');

    validador = document.getElementById('codigo_escrito').value;

    if(validador.length >= 1){
        frame5.style.display = "none";
        muneco.style.display = "none";
        rectangle.style.display = "none";
        rectangle1.style.display = "block";
    }if(validador.length < 1){
        frame5.style.display = "flex";
        muneco.style.display = "flex";
        rectangle.style.display = "block";
        rectangle1.style.display = "none";
    }
    
}


function copiarTexto(){

    var content = document.getElementById('encriptado');


    content.select();
    document.execCommand('copy');

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
     Toast.fire({
        icon: 'success',
        title: 'Texto copiado exitosamente'
      })


}



