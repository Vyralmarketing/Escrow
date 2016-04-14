console.log("congrats, I'm loaded.");

//Sticky Navbar
jQuery(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    $('.top-menu').slideToggle("slow", function(){});
	});

// Navbar scroll transition
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop <= 400){
      $("#top-nav, #page-nav").removeClass("nav-inverse");
      //$("#topnav-logo").addClass("hidden");
    }else{
      $("#top-nav, #page-nav").addClass("nav-inverse");
      //$("#topnav-logo").removeClass("hidden");
    }//if-else
  });//win func.
});//ready func.

});

// $(document).scroll(function(){
//         t = (400 - $(this).scrollTop())/400;
//         if(t<0)t=0;
//         $('#hero').css({opacity: t});
//     })

$('#contact').click(function(){
	$('.modal-wrapper').show();
});

$('.exit').click(function(){
	$('.modal-wrapper').hide();
});


//Fluidvid.js

  (function ( window, document, undefined ) {

    /*
     * Grab all iframes on the page or return
     */
    var iframes = document.getElementsByTagName( 'iframe' );

    /*
     * Loop through the iframes array
     */
    for ( var i = 0; i < iframes.length; i++ ) {

      var iframe = iframes[i],

      /*
         * RegExp, extend this if you need more players
         */
      players = /www.youtube.com|player.vimeo.com/;

      /*
       * If the RegExp pattern exists within the current iframe
       */
      if ( iframe.src.search( players ) > 0 ) {

        /*
         * Calculate the video ratio based on the iframe's w/h dimensions
         */
        var videoRatio        = ( iframe.height / iframe.width ) * 100;

        /*
         * Replace the iframe's dimensions and position
         * the iframe absolute, this is the trick to emulate
         * the video ratio
         */
        iframe.style.position = 'absolute';
        iframe.style.top      = '0';
        iframe.style.left     = '0';
        iframe.width          = '100%';
        iframe.height         = '100%';

        /*
         * Wrap the iframe in a new <div> which uses a
         * dynamically fetched padding-top property based
         * on the video's w/h dimensions
         */
        var wrap              = document.createElement( 'div' );
        wrap.className        = 'fluid-vids';
        wrap.style.width      = '100%';
        wrap.style.position   = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        /*
         * Add the iframe inside our newly created <div>
         */
        var iframeParent      = iframe.parentNode;
        iframeParent.insertBefore( wrap, iframe );
        wrap.appendChild( iframe );

      }

    }

  })( window, document );
