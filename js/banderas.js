
$('#iconosbanderas a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var iconos = $(this).find('span').html();
	// lo guardo en localStorage
	window.localStorage.setItem('iconos', iconos);
});
