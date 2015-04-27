<?php use Roots\Sage\Titles; ?>

<div class="page-header">
  <h1>
    <?= Titles\title(); ?>
  </h1>
  <?php
    $text  = get_post_meta(get_the_ID(), '_binding_textarea', true );
    echo $text;
  ?>
</div>
