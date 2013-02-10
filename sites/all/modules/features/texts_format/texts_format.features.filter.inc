<?php
/**
 * @file
 * texts_format.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function texts_format_filter_default_formats() {
  $formats = array();

  // Exported format: Editeur WYSIWYG.
  $formats['editeur_wysiwyg'] = array(
    'format' => 'editeur_wysiwyg',
    'name' => 'Editeur WYSIWYG',
    'cache' => '1',
    'status' => '1',
    'weight' => '0',
    'filters' => array(),
  );

  return $formats;
}
