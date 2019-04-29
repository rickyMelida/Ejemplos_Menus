
$("#mas").click(function() {
	$('#mas ul').slideToggle(700);
});

$("#prueba").click(function() {
	var width = window.innerWidth; // ancho
	var height = window.innerHeight; // alto

	alert("Ancho: " + width);
	alert("Alto: " + height);
});