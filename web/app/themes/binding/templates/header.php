<?php use Roots\Sage\Nav\NavWalker; ?>

<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only"><?= __('Toggle navigation', 'binding'); ?></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
    </div>

    <nav class="collapse navbar-collapse" role="navigation">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'walker' => new NavWalker(), 'menu_class' => 'nav navbar-nav']);
      endif;
      ?>

      <?php if (function_exists('qts_language_menu')) {
        //qts_language_menu('text');
        $type = 'text';
        $args = array(
            'id' => 'qts-lang-menu', // ID of html oputput
            'class' => 'qts-lang-menu nav navbar-nav',  // class / classes of the html output
            'short' => false // if true, display text as short 'English' -> 'en'
        );
        qts_language_menu($type, $args);
      } ?>

    </nav>
  </div>
</header>
