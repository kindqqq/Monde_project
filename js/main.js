$(function(){
    $('.top__slider').slick({
        arrows: false, 
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                dots: false,
              }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    
    $('.menu__btn').click(function() {
       $('.header__menu-list').slideToggle()  
    });

    $(".top__to-go").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 700);
	});

})