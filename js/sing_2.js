$('.next_2 a').on('click', function(ev){

  var nombre = $('#usr').val();
  var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

  if (nombre.length == 0 || nombre.length == "") {
    // alertar al usuario
    alert('Ingrese su Nombre y Apellido');
    return false;

  } else if (nombre.length > 30){
    alert('maximo 30 caracteres');
    return false;

  } else if(!soloLetras.test(nombre)){
    alert('Ingrese solo letras')
    return false;
  }
  
  var correo = $('#email').val();
  var emailValido = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  if (correo.length == 0 || correo.length == "") {
    // alertar al usuario
    alert('Ingrese su email');
    return false;

  } else if (correo.length > 50){
    alert('maximo 50 caracteres');
    return false;

  } else if(!emailValido.test(correo)){
    alert('Email invalido');
    return false;
  }

  // en este punto guardar datos
  localStorage.setItem("nombre_nuevo", nombre);
  localStorage.setItem("email", correo);
});







