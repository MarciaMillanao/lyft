//validar nombre
$('.next_2 a').on('click', function(ev){

  var nombre = $('#usr').val();
  var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

  if (nombre.length == 0 || nombre.length == "") {
    // alertar al usuario
    alert('ingrese datos');
    return false;
  }
  if (nombre.length > 30){
  alert('maximo 30 caracteres');
  }
  if(!soloLetras.test(nombre))
    alert('solo letras')
});


//validar correo
$('.next_2 a').on('click', function(ev){

  var correo = $('#email').val();
  var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (correo.length == 0 || correo.length == "") {
    // alertar al usuario
    alert('ingrese datos');
    return false;
  }
   if (correo.length > 50){
  alert('maximo 50 caracteres');
  }
  if(!emailValido.test(email)){
    alert('correo invalido')
  }

});