$('.menu-bar').on('click', function(){
	$('.sidebar').toggleClass('abrir');
});

var nombre = localStorage.getItem("nombre_nuevo");
$('.usuario').html(nombre);

var correo = localStorage.getItem("email");
$('.email').html(correo);