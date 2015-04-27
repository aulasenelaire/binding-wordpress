<?php while (have_posts()) : the_post(); ?>
    <i class="fa fa-5x fa-child"></i>
  <?php get_template_part('templates/page', 'header'); ?>
  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>
