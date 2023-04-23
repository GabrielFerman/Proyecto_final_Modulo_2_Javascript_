/*Funciones para depositar y retirar*/
var fondo = 0.0;

function depositar(){
    var cantidad = document.getElementById("cantidad").value;
    var cantidad_numero = parseFloat(cantidad);
    if ( isNaN(cantidad_numero )){
        valor = document.getElementById("cantidad").value = "";           
    } else {
        fondo += cantidad_numero;    
        var fondo_actual = document.getElementById("fondo_actual");
        fondo_actual.innerHTML= "Actualmente tienes: " + fondo;
        valor = document.getElementById("cantidad").value = "";
    }

}
function retirar(){
    var cantidad=document.getElementById("cantidad").value;
    var cantidad_numero= parseFloat(cantidad);
    if( isNaN(cantidad_numero)){
        valor = document.getElementById("cantidad").value = "";        
    } else if ( cantidad_numero<=fondo ) {
        fondo -= cantidad_numero;
        var fondo_actual = document.getElementById("fondo_actual");
        fondo_actual.innerHTML= "Actualmente tienes: " + fondo;
        valor = document.getElementById("cantidad").value = "";
    } else {
        alert("No tienes fondos suficientes");
        valor = document.getElementById("cantidad").value = "";
    }
}

/*Funciones del keypad*/
    var valor = document.getElementById("cantidad").value = "";
    function uno(){
        var  numero_uno = '1';
        valor = document.getElementById("cantidad").value = valor + numero_uno;    
    }
    function dos(){
        var  numero_dos = '2';
        valor = document.getElementById("cantidad").value = valor + numero_dos;
    }
    function tres(){
        var  numero_tres = '3';
        valor = document.getElementById("cantidad").value = valor + numero_tres;
    }
    function cuatro(){
        var  numero_cuatro = '4';
        valor = document.getElementById("cantidad").value = valor + numero_cuatro;
    }
    function cinco(){
        var  numero_cinco = '5';
        valor = document.getElementById("cantidad").value = valor + numero_cinco;
    }
    function seis(){
        var  numero_seis = '6';
        valor = document.getElementById("cantidad").value = valor + numero_seis;
    }
    function siete(){
        var  numero_siete = '7';
        valor = document.getElementById("cantidad").value = valor + numero_siete;
    }
    function ocho(){
        var  numero_ocho = '8';
        valor = document.getElementById("cantidad").value = valor + numero_ocho;
    }
    function nueve(){
        var  numero_nueve = '9';
        valor = document.getElementById("cantidad").value = valor + numero_nueve;
    }
    function cero(){
        var  numero_cero = '0';
        valor = document.getElementById("cantidad").value = valor + numero_cero;
    }
    function corregir(){
        valor = document.getElementById("cantidad").value = valor.substring(0, valor.length - 1);
    }
    function borrar(){
        valor = document.getElementById("cantidad").value = "";
    }

/*Fucniones de registrar e ingresar*/
    function suscribirse(){
        var nombre_registro= document.getElementsByClassName("informacion_registro_usuario")[0].value;
        localStorage.setItem("nombre", nombre_registro);
        var password_registro= document.getElementsByClassName("informacion_registro_usuario")[1].value;
        localStorage.setItem("password", password_registro);
        location.href= "index_ingresar.html";
        alert("El registro esta completado por favor inicie sesion");
    }
    function ingresar(){
        var nombre_ingresar= document.getElementsByClassName("informacion_ingresar_usuario")[0].value;
        var password_ingresar= document.getElementsByClassName("informacion_ingresar_usuario")[1].value;
        if (nombre_ingresar == localStorage.getItem("nombre") && password_ingresar == localStorage.getItem("password")){
            location.href= "index_cajero.html";
            alert("Usuario y contraseña correctos");
        } else {
            alert("Usuario y contraseña incorrectos");
    }
    }