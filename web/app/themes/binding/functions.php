<?php
/**
 * Sage includes
 *
 * The $binding_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 *
 * @link https://github.com/roots/sage/pull/1042
 */
$binding_includes = [
  'lib/utils.php',                 // Utility functions
  'lib/init.php',                  // Initial theme setup and constants
  'lib/wrapper.php',               // Theme wrapper class
  'lib/conditional-tag-check.php', // ConditionalTagCheck class
  'lib/config.php',                // Configuration
  'lib/assets.php',                // Scripts and stylesheets
  'lib/titles.php',                // Page titles
  'lib/nav.php',                   // Custom nav modifications
  'lib/gallery.php',               // Custom [gallery] modifications
  'lib/extras.php',                // Custom functions
  'lib/cmb2.php',                  // Custom Fields declarations
  //'lib/timber.php',                // Timber template system configuration  
  'lib/binding.php'                // Binding custom functions. Extra from roots/sage starter theme
];

foreach ($binding_includes as $file) {
  if (!$filepath = locate_template($file)) {
    trigger_error(sprintf(__('Error locating %s for inclusion', 'binding'), $file), E_USER_ERROR);
  }

  require_once $filepath;
}
unset($file, $filepath);

