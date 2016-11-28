

//SELECCION DE BANDERAS

var banderas = [
  {
    nombre: "Chile",
    area: "+569",
    bandera:"img/chile.png"
  },

  {
    nombre: "Argentina",
    area: "+569",
    bandera:"img/argentina.png"
  },

  {
    nombre: "Brasil",
    area: "+569",
    bandera:"img/brasil.png"
  },

  {
    nombre: "España",
    area: "+569",
    bandera:"img/españa.png"
  },

  {
    nombre: "Mexico",
    area: "+569",
    bandera:"img/mexico.png"
  },

  {
    nombre: "Peru",
    area: "+569",
    bandera:"img/peru.png"
  },

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