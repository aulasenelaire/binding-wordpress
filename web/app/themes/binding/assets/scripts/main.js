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
}

startupKit.uiKitHeader._inFixedMode = function(headerClass) {
  var $header = $(headerClass);

  if ($header) {
    var hero_section = $('.js-hero-section'),
      fake_top_nav_wrapper = 60,
      s1StopScroll = hero_section.outerHeight() - fake_top_nav_wrapper,
      s1FadedEls = $('.js-hero-background, .js-hero-caption, .js-hero-overlay', hero_section),
      antiflicker,
      options,
      s1_overlay = $('.js-hero-overlay', hero_section),
      s1_overlay_bg = s1_overlay.css('background'),
      antiflickerStopScroll = fake_top_nav_wrapper;


    $('body').append(antiflicker);


    s1FadedEls.each(function() {
      $(this).data('origOpacity', $(this).css('opacity'));
    });
    
    options = {
      s1FadedEls: s1FadedEls, 
      header: $header,
      s1StopScroll: s1StopScroll, 
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
  }
};

/* Header */
startupKit.uiKitHeader.header = function() {
  startupKit.uiKitHeader._inFixedMode('.over-hero');
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
