const nombre= document.querySelector("#nombre");
const correo= document.querySelector("#correo");
const clave= document.querySelector("#clave");
const repetirclave= document.querySelector("#repetirclave");
const btn= document.querySelector("#btnEnviar")
console.log(localStorage.getItem("datos"))
btn.addEventListener('click',btnOnclick);
function btnOnclick(event){
    event.preventDefault();
    console.log("Nombre: "+nombre.value +
        "\nCorreo: "+correo.value+
        "\nClave: "+clave.value+
        "\nRepetirclave: "+ repetirclave.value
    );
    const datos={
        nombre: nombre.value,
        correo: correo.value,
        clave: clave.value
    }
    localStorage.setItem('datos', JSON.stringify(datos));}
    const datosLocalStorage= JSON.parse(localStorage.getItem("datos"));
    nombre.value = datosLocalStorage.nombre;
    correo.value = datosLocalStorage.correo;