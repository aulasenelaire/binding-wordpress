<?php

namespace Roots\Sage\Binding;

/**
 * This a filter to manipulate page title if necessary
 */
function custom_title_filter($title) {
  return sprintf("%s", $title);
}

add_filter('wp_title', __NAMESPACE__ . '\\custom_title_filter');
