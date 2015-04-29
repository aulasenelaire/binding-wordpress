<?php
/**
 * Template Name: Home Template
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['page_has_hero'] = false;
Timber::render('home.twig', $context);
