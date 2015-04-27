<?php
/**
 * Template Name: Home Template
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render('home.twig', $context);
