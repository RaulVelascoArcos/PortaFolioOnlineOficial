$(document).on("ready",inicio);

function inicio(){
	$("#menu a").on("click", irA);
	$(window).scroll(scrollMenu);
}
function irA(){
	var seccion = $(this).attr("href");
	$("body,html").animate({
		scrollTop:$(seccion).offset().top-70
	},800);
	return false;
}
function scrollMenu(){
	var secciones =[$("#yo").offset().top,$("#perfil").offset().top,$("#trabajo").offset().top,$("#contacto").offset().top,$("body").height()];


	if($(this).scrollTop() > secciones[0]-100 && $(this).scrollTop() < secciones[1]-100){
		$("#menu a").eq(0).addClass("activo");
	}else{
		$("#menu a").eq(0).removeClass("activo");
	}

	if($(this).scrollTop() > secciones[1]-100 && $(this).scrollTop() < secciones[2]-100){
		$("#menu a").eq(1).addClass("activo");
	}else{
		$("#menu a").eq(1).removeClass("activo");
	}

	if($(this).scrollTop() > secciones[2]-100 && $(this).scrollTop() < secciones[3]-100){
		$("#menu a").eq(2).addClass("activo");
	}else{
		$("#menu a").eq(2).removeClass("activo");
	}

	if($(this).scrollTop() > secciones[3] && $(this).scrollTop() < secciones[4]){
		$("#menu a").eq(3).addClass("activo");
	}else{
		$("#menu a").eq(3).removeClass("activo");
	}
}
