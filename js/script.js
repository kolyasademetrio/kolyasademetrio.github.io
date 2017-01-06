$(document).ready(function(){

	/*--------------------------------- функция для адаптивного меню -----------------------------*/
		function menuAdapt(menuBtn, menu, header) {

			var $menuBtn = menuBtn,
				$menu = menu,
				$header = header,
				menuHeight;

			$menuBtn.on('click', function(){
				menuHeight = $header.height();
				$menu.css('top', menuHeight);
				$menu.slideToggle();
			});

			$(window).resize(function(){
				if (window.matchMedia('(max-width: 768px)').matches && $($menu).is(':visible')) {
					$($menu).hide();
				} else if (window.matchMedia('(min-width: 768px)').matches) {
					$($menu).show();
				}
			});

		}

		menuAdapt($('.header .glyphicon.glyphicon-menu-hamburger'), $('.header__navList'), $('.header'));
	/*--------------------------------- функция для адаптивного меню End -------------------------*/



	/*--------------------------------- функция для якоря -------------------------*/
		function ancor (ancor, goal) {

			$(ancor).on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $(goal).offset().top - 80 }, 2000);
			  e.preventDefault();
			});

		}

		ancor($('#aboutMe'), $('.aboutMe'));
		ancor($('#myWorks'), $('.myWorks'));
		ancor($('#myContacts'), $('.myContacts'));
	/*--------------------------------- функция для якоря Конец -------------------------*/
	
	/*------------------- функция для добавления класса хеадеру -------------------------*/
	function stickyElem($ancor, $stickyElem, classToAdd) {
		var window_top = $(window).scrollTop(),
			$ancor = $ancor,
			$stickyElem = $stickyElem,
			stickyElemHeight = $stickyElem.innerHeight(),
			div_top = $ancor.offset().top - stickyElemHeight;

		if (window_top > div_top) {
			$stickyElem.addClass(classToAdd);
		} else {
			$stickyElem.removeClass(classToAdd);
		}

	}

	$(window).scroll(function(){
		stickyElem($('.profession__mainTitle'), $('.header'), 'headerColorBrown');
	});

	stickyElem($('.profession__mainTitle'), $('.header'), 'headerColorBrown');
	/*------------------------- функция для добавления класса хеадеру Конец -------------------------*/


	/*----------------------------- функция для добавления класса хеадеру 2 -------------------------*/
	function visibleElem ($ancor, $elemToAddClass, classToAdd) {
		var docViewTop = $(window).scrollTop(),
		    docViewBottom = docViewTop + $(window).height(),
		    $ancor = $ancor,
		    ancorTop = $ancor.offset().top,
		    ancorBottom = ancorTop + $ancor.innerHeight();

	    if (docViewBottom >= ancorTop) {
	    	$elemToAddClass.addClass(classToAdd);
	    } else {
	    	$elemToAddClass.removeClass(classToAdd);
	    }
	}

	$(window).scroll(function(){
		visibleElem ($('.myWorks'), $('.header'), 'headerColorBlue');
	});

	visibleElem ($('.myWorks'), $('.header'), 'headerColorBlue');
	/*---------------------------- функция для добавления класса хеадеру 2 Конец --------------------*/
});