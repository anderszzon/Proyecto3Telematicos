
const registro = { 
    admin : {password: '1234', cocina: true, baño: true, sala: true, jardin: true, habitacion: true, garage: true}, 
    admin2 : {password: '1234', cocina: true, baño: true, sala: false, jardin: false, habitacion: true, garage: true}
}

var i=0;

function Ingresar(){

    let inputValue = document.getElementById("user").value;
    let inputValue2 = document.getElementById("password").value;


    if (registro.hasOwnProperty(inputValue)){
        if(registro[inputValue].password == inputValue2){
            if(registro[inputValue].cocina){document.getElementById("i_cocina").style.display = "block";}
            if(registro[inputValue].baño){document.getElementById("i_baño").style.display = "block";}
            if(registro[inputValue].sala){document.getElementById("i_sala").style.display = "block";}
            if(registro[inputValue].jardin){document.getElementById("i_jardin").style.display = "block";}
            if(registro[inputValue].habitacion){document.getElementById("i_habitacion").style.display = "block";}
            if(registro[inputValue].garage){document.getElementById("i_garage").style.display = "block";}
            document.getElementById("salir").style.display = "block";
            alert("Welcome "+ String(inputValue));
        }
        else{alert("user and password incorrect");i=i+1;}
    }
    else {alert("user and password incorrect");i=i+1;}

    
    
    if(i>=5){alert("Lock for 30 seconds");setTimeout(Clic, 3000);i=0} //1000 milisegundos
    
}

function Registrar(){

    let inputValue = document.getElementById("user").value;
    let inputValue2 = document.getElementById("password").value;

    let inputValue3 = document.getElementById("user2").value;
    let inputValue4 = document.getElementById("password2").value;

    let inputValue5 = document.getElementById("cocina").checked;
    let inputValue6 = document.getElementById("baño").checked;
    let inputValue7 = document.getElementById("sala").checked;
    let inputValue8 = document.getElementById("jardin").checked;
    let inputValue9 = document.getElementById("habitacion").checked;
    let inputValue10 = document.getElementById("garage").checked;


    if (registro.hasOwnProperty(inputValue)){
        if(registro[inputValue].password == inputValue2){
            Object.defineProperty(registro, inputValue3, {value:{password: inputValue4, cocina: inputValue5, baño: inputValue6, sala: inputValue7, jardin: inputValue8, habitacion: inputValue9, garage: inputValue10}, enumerable : true});
            alert("Successfully registered user");}
        else{alert("user and password incorrect");i=i+1;}
        }
    else {alert("user and password incorrect");i=i+1;}
    
    if(i>=5){setTimeout(Clic, 3000);alert("Lock for 30 seconds");i=0} //1000 milisegundos
    
}
function Salir(){

    document.getElementById("i_cocina").style.display = "none";
    document.getElementById("i_baño").style.display = "none";
    document.getElementById("i_sala").style.display = "none";
    document.getElementById("i_jardin").style.display = "none";
    document.getElementById("i_habitacion").style.display = "none";
    document.getElementById("i_garage").style.display = "none";
    document.getElementById("salir").style.display = "none";
}