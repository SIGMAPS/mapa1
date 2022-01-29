//jquery for toggle sub menus
$(document).ready(function(){
	$('.sub-btn').click(function(){
		$(this).next('.sub-menu').slideToggle();
		$(this).find('.dropdown').toggleClass('rotate');
		$(this).not('.dropdown').removeClass();
	});


//jquery for expand and collapse the sidebar
$('.menu-btn').click(function(){
	$('.side-bar').addClass('active');
	$('.menu-btn').css("visibility","hidden");
});

$('.close-btn').click(function(){
	$('.side-bar').removeClass('active');
	$('.menu-btn').css("visibility","visible");
});

//map options
let mapOptions = {
	center: [42.860, 3.472],
	zoom:6,
	zoomControl: false
}

//create map
var map = L.map('main',mapOptions)

let layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
layer.addTo(map);

});