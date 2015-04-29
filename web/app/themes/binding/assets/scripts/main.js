window.startupKit = window.startupKit || {};


/**
 *  Headers 
 * */
startupKit.uiKitHeader = startupKit.uiKitHeader || {};

/**
 * Do scroll calculation to decide if 
 * top navigation is over hero section
 *
 */
function _resizeHeroTopNavigation (options) {
  var opacity,
    s1FadedEls = options.s1FadedEls, 
    $header = options.header,
    s1StopScroll = options.s1StopScroll, 
    antiflicker = options.antiflicker, 
    s1_overlay = options.s1_overlay,
    s1_overlay_bg = options.s1_overlay_bg,
    antiflickerStopScroll = options.antiflickerStopScroll,
    opacityAntiflicker;

  opacity = (s1StopScroll - $(window).scrollTop()) / s1StopScroll;
  opacity = Math.max(0, opacity);

  if ($(window).scrollTop() > s1StopScroll - antiflickerStopScroll) {
    opacityAntiflicker = (s1StopScroll - $(window).scrollTop()) / antiflickerStopScroll;
    opacityAntiflicker = Math.max(0, opacityAntiflicker);
    s1_overlay.css('background', 'white');
    $header.removeClass('in');
  } else {
    s1_overlay.css('background', s1_overlay_bg);
    opacityAntiflicker = 1;
    $header.addClass('in');
  }

  s1FadedEls.each(function() {
    $(this).css('opacity', $(this).data('origOpacity') * opacity);
  });

  antiflicker.css({
    'opacity': 1.0001 - opacityAntiflicker
  });
}
startupKit.uiKitHeader._inFixedMode = function(headerClass) {
  var $header = $(headerClass);

  if ($(headerClass).hasClass('over-hero')) {
    var s1 = $(headerClass + '-sub'),
      fake_top_nav_wrapper = 100,
      s1StopScroll = s1.outerHeight() - fake_top_nav_wrapper,
      s1FadedEls = $('.js-hero-background, .js-hero-caption, .js-hero-overlay', s1),
      antiflicker,
      options,
      s1_overlay = $('.js-hero-overlay', s1),
      s1_overlay_bg = s1_overlay.css('background'),
      antiflickerStopScroll = fake_top_nav_wrapper;

    antiflicker = $('<div class="' + headerClass.slice(1) + '-startup-antiflicker header-antiflicker fake-top-navigation-bg" style="opacity: 0.0001;" />');

    $('body').append(antiflicker);


    s1FadedEls.each(function() {
      $(this).data('origOpacity', $(this).css('opacity'));
    });
    
    options = {
      s1FadedEls: s1FadedEls, 
      header: $header,
      s1StopScroll: s1StopScroll, 
      antiflicker: antiflicker, 
      s1_overlay: s1_overlay,
      s1_overlay_bg: s1_overlay_bg,
      antiflickerStopScroll: antiflickerStopScroll
    };

    $(window).scroll(function() {
      _resizeHeroTopNavigation(options);
    });

    $(window).resize(function(){
      _resizeHeroTopNavigation(options);
    });
    
    // On load check where is scroll
    _resizeHeroTopNavigation(options);
  }
};

/* Header */
startupKit.uiKitHeader.header = function() {
  startupKit.uiKitHeader._inFixedMode('.js-top-navigation');
};

 /* 
  * Global part of startup-kit
  *
 */
(function($) {
    $(function() {
      /* implementing headers */
      startupKit.uiKitHeader.header();

        /* function on load */
        $(window).load(function() {
          $('html').addClass('loaded');
          $(window).resize();
        });
    });
    //add some smooth for scroll
})(jQuery);
