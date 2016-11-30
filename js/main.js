//SELECCION DE BANDERAS

var banderas = [
  {
    nombre: "Chile",
    area: "+569",
    bandera:"img/chile.png"
  },

  {
    nombre: "Argentina",
    area: "+54",
    bandera:"img/argentina.png"
  },

  {
    nombre: "Brasil",
    area: "+55",
    bandera:"img/brasil.png"
  },

  {
    nombre: "España",
    area: "+34",
    bandera:"img/españa.png"
  },

  {
    nombre: "Mexico",
    area: "+52",
    bandera:"img/mexico.png"
  },

  {
    nombre: "Peru",
    area: "+51",
    bandera:"img/peru.png"
  }
];


var iconos = window.localStorage.getItem("iconos") || "Chile";

var bandera_pais = {};
for (var i=0 ; i<banderas.length ; ++i){
  if (banderas[i].nombre == iconos) {
    bandera_pais = banderas[i];
    break;
  }
}

$('#foto img').attr('src', bandera_pais.bandera);
$('#area').html(bandera_pais.area);

//validar input
$('.next').on('click', function(){
  var input = $('#teclado').val();
  if (input.length == 0 || input.length ==""){
    alert("ingrese su numero");
    return false;

  }else if(isNaN(input)){
    alert('ingrese solo numeros');
    return false;

  }else if(input.length!==9){
    alert('debe tener 9 digitos');
    return false;    
  }
  
  localStorage.setItem("numero_telefono", input);
});

