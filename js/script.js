// выезжающее меню на первом экране

const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeElem = document.querySelector('.menu__exit'),
	  overlay = document.querySelector('.menu__overlay');
	  menuItems = document.querySelectorAll('.menu__block__items');


hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

hamburger.addEventListener('click', () => {
	hamburger.classList.remove('hamburger');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

closeElem.addEventListener('click', () => {
	hamburger.classList.add('hamburger');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	hamburger.classList.add('hamburger');
});

// выезжающее меню на первом экране





// при нажатии ссылок в выезжающем меню, чтобы само меню скрывалось и возвращался гамбургер

menuItems.forEach(function(element) {
	element.addEventListener('click', () => {
		menu.classList.remove('active');
		hamburger.classList.add('hamburger');
	})
});

// при нажатии ссылок в выезжающем меню, чтобы само меню скрывалось и возвращался гамбургер




// кнопка открутки вверх

$(window).scroll(function() {
	if ($(this).scrollTop() > 1200) {
		$('.arrow_up').fadeIn();
	} else {
		$('.arrow_up').fadeOut();
	}
});

// кнопка открутки вверх





// плавный скросс кнопки вверх

$("a[href=#up]").click(function(){
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"}
	,
	{
		duration: 400,   
		easing: "linear" 
	});
	return false;
});

// плавный скросс кнопки вверх





// подключаем аякс, чтобы страница не перезагружалась при выполнении скриптов

$.ajax({							
	});

// подключаем аякс, чтобы страница не перезагружалась при выполнении скриптов
