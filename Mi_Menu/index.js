var ancho_vent = window.innerWidth; // ancho
var alto_vent = window.innerHeight; // alto	

//Actualizamos los datos
setInterval(function() {	
	ancho_vent = window.innerWidth;	
}, 500);


//Cuando pasemos el mouse por encima se baja 
//Y cuando saquemos vuelve a subir
$('#mas').hover(function() {
	$('#mas ul').slideDown(700);
}, function() {
	$('#mas ul').slideUp(700);
});


$("#mas").click(function() {
	if(ancho_vent < 940) {
		slider();
	}
});



function slider() {
	$('#mas ul').slideToggle(700);
}
