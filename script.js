console.log("loading Javascript");


function sendForm(){
    console.log("Envio Formulario")

    let nameInfo = document.getElementById("nombre");
    let emailInfo = document.getElementById("correo");
    let valueDolarInfo = document.getElementById("dolar");

    nameInfo = nameInfo.value
    emailInfo = emailInfo.value
    valueDolarInfo = valueDolarInfo.value;


    let personalInfo = {
        name: nameInfo,
        email: emailInfo,
        valuePeso: valueDolarInfo * 4487

    }
    console.log(personalInfo);

    // Almacenamiento Cookies sin .value

    document.cookie= "name=Daniel";
    document.cookie= "id=1234";
    document.cookie= "email=Daniel@ff.com";

    let nameData = document.cookie;

    console.log(nameData);
    alert("SAVE!!!");


    //Almacenamiento Estrategia Web Storage con .value

    //Session storage

        sessionStorage.setItem("name", personalInfo.name);
        sessionStorage.setItem("correo", personalInfo.email);
        sessionStorage.setItem("correo", personalInfo.valuePeso);

        sessionStorage.setItem("personalInfo", JSON.stringify(personalInfo));

        //sessionStorage.removeItem("email");



    alert("Se guardó el formulario con: nombre: " + personalInfo.name + " email: " + personalInfo.email);

    alert("Precio Dolar: " + valueDolarInfo + " Precio Peso Col: "+ personalInfo.valuePeso)

}


let bF1 = document.getElementById('BotonFormulario');

console.log(bF1);

bF1.addEventListener('click', sendForm);

let b2 = document.getElementById('formulario');

console.log(b2);

b2.addEventListener('click', sendForm);

const clearData =()=>{

    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("valuePeso");
    sessionStorage.removeItem("personalInfo");

}

let buttonData = document.getElementById('clearData');

buttonData.addEventListener('click', clearData);

/* // pendiente por implementar
const viewData =()=>{

    sessionStorage.setItem("name");
    sessionStorage.setItem("email");
    sessionStorage.setItem("valuePeso");
    sessionStorage.setItem("personalInfo");

}

let buttonView = document.getElementById('viewData');

buttonView.addEventListener('click', viewData);

console.log(viewData);*/