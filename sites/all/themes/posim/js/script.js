/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

//http://slidesjs.com/

(function ($, Drupal, window, document, undefined) {
	
	
	
	
	
	
	
	
	
	
	
	
	

$(document).ready(init);

function init()
{
	/* Réecriture des langues (switcher) */	
	$('#block-locale-language').find('a').each(function () {
		if($(this).text() == "French" || $(this).text() == "Français") 
		{
			$(this).text("Fr");
		};
		if($(this).text() == "English" || $(this).text() == "Anglais") 
		{
			$(this).text("En");
		};
	})
	
	/* Slideshow caption */	
	$(".slide").mouseenter(
	  function(){
		$('.caption').animate({
				bottom:0
			},200);
	  });
	$(".slide").mouseleave(
	  function() {
		$('.caption').animate({
				bottom:-35
			},200);
	});	
	
	/* Lightbox */	
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_href = $(this).attr("href");
		if ($('#lightbox').length > 0) { // #lightbox exists
			$('#lightboxContent').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
			$('body').css('overflow','hidden');
		}
		else {
			var lightbox = 
			'<div id="lightbox">' +
				//'<p>Fermer</p>' +
				'<div id="lightboxContent">' +
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
			$('body').append(lightbox);
		}
	});
	$('#lightbox').live('click', function() {
		$('#lightbox').hide();
	});
	
	
};


$(function(){
	var totaleSlide = $('#slides .slide').size();

	$('#slides').slides({
		preload: true,
		preloadImage: Drupal.settings.basePath+'sites/all/themes/posim/images/loading.gif',
		effect: 'fade',
		fadeSpeed: 250,
		play: 0,
		pause: 2500,
		hoverPause: true,
		generatePagination: false,
		animationStart: function(current){
			$('.caption').animate({
				bottom:-35
			},100);
			if (window.console && console.log) {
				// example return of current slide number
				//console.log('animationStart on slide: ', current);
			};
		},
		animationComplete: function(current){
			/*$('.caption').animate({
				bottom:0
			},200);*/
			if (window.console && console.log) {
				// example return of current slide number
				//console.log('animationComplete on slide: ', current);
				updatePager( current, totaleSlide );
			};
		},
		slidesLoaded: function() {
			updatePager( 1, totaleSlide );
			/*$('.caption').animate({
				bottom:0
			},200);*/
		}
	});
});
function updatePager( current, totaleSlide ) 
{
	$('.num-page').html(current+'/'+totaleSlide);
}

})(jQuery, Drupal, this, this.document);
