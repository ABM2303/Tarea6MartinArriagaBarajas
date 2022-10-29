function myFunction(){
    //obtiene el valor de entrada en el campo con id="control"
    let ll1=false;
    let ll2=false;
    let ll3=false;
    let ll4=false;
    
    let x1 = document.getElementById("control").value;
    const regex = /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
    if(regex.test(x1)){
        text="Numero de control valido.";
    }else{
        text="Numero de control no valido";
    }

    document.getElementById("valida_control").innerHTML = text;

    //obtiene el valor de entrada en el campo con id="RFC"
    let x2 = document.getElementById("RFC").value;
    const regex2 =/^[A-Z]{4}([0-9]{2}([0][1-9]|[1][0-2])([0][1-9]|[1-2][0-9]|30))[A-Z0-9]{3}$/g;
    if(regex2.test(x2)){
        text="RFC valido";
    }else{
        text="RFC no valido";
    }

    document.getElementById("valida_RFC").innerHTML = text;

    //obtiene el valor de entrada en el campo con id="telefono"
    let x3 = document.getElementById("telefono").value;
    const regex3=/^443[0-9]{7}$/g;
    if(regex3.test(x3)){
        text="Numero de telefono valido";
    }else{
        text="Numero de telefono no valido";
    }

    document.getElementById("valida_telefono").innerHTML = text;

    //obtiene el valor de entrada en el campo con id="telefono"
    let x4 = document.getElementById("correo").value;
    let regex4=/^l(c|m)?([0-9]{2}(120|121)[0-9]{3})@morelia\.tecnm\.mx$/g
    if(regex4.test(x4)){
        text="Correo valido";
    }else{
        text="Correo no valido";
    }
    document.getElementById("valida_correo").innerHTML = text;

    text=x4;
    let result=/^l(c|m)?([0-9]{2}(120|121)[0-9]{3})@morelia\.tecnm\.mx$/.exec(text);
    if(result[2]===x1){
        document.getElementById("correo_coincide").innerHTML ="El numero de control y correo coinciden.";
    }else{
        document.getElementById("correo_coincide").innerHTML ="El numero de control y correo no coinciden.";
    }
    let nombre = document.getElementById("nombre").value;
    text=x2;
    let result1=/^[A-Z]{4}([0-9]{2}([0][1-9]|[1][0-2])([0][1-9]|[1-2][0-9]|30))[A-Z0-9]{3}$/g.exec(text);
    if(nombre.length>0 && x2.length>0){
        document.getElementById("completo").innerHTML ="Usuario Verificado: "+nombre+" nacido en "+result1[1];
    }else{
        document.getElementById("completo").innerHTML ="Ingrese su nombre y RFC.";
    }
    // document.getElementById("completo").innerHTML ="Usuario Verificado: "+nombre+" nacido en "+result1[1];

}