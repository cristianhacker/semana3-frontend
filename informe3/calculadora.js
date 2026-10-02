const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(function(boton){
    boton.addEventListener('click',function(){
        // console.log(boton.textContent)
        const botonApretado=boton.textContent;
        if(boton.id==="c"){
            pantalla.textContent="0";return;
        }
        if(boton.id==="hi"){
            pantalla.textContent="¿Cómo estas bb?";return
        }

        if(boton.id==="borrar"){
            if(pantalla.textContent.length===1 || pantalla.textContent==="Error!"||pantalla.textContent==="print('HOLA MUNDO')"||pantalla.textContent==="¿Cómo estas bb?"){
                pantalla.textContent="0"
            }
            else{ pantalla.textContent=pantalla.textContent.slice(0,-1)}
           ;return
        }
        if(boton.id ==="igual"){
            try{pantalla.textContent= eval(pantalla.textContent)}catch{pantalla.textContent= "Error!";}
            ;return
        }
        if(pantalla.textContent ==="0" || pantalla.textContent==="Error!" ||pantalla.textContent==="print('HOLA MUNDO')"||pantalla.textContent==="¿Cómo estas bb?"){
            pantalla.textContent= botonApretado
        }
        else{
            pantalla.textContent += botonApretado;
        }      
    })
    boton.addEventListener('dblclick',function(){
        
        if(boton.id==="c"||boton.id==="igual"){
            pantalla.textContent="print('HOLA MUNDO')";return;
        }
        

    })
   
    
})


