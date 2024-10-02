<?php
/**
 * Plugin Name: Advanced Panorama 360 Viewer
 * Plugin URI: https://wpshopifyexpert.com/advanced-panorama-360-viewer
 * Description: A powerful 360 panorama viewer with Gutenberg block and Elementor addon support.
 * Version: 1.0.0
 * Author: WP Shopify Expert
 * Author URI: https://wpshopifyexpert.com
 * Text Domain: adv-pano-360
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Composer autoloader
if (file_exists(dirname(__FILE__) . '/vendor/autoload.php')) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

define('ADV_PANO_360_VERSION', '1.0.0');
define('ADV_PANO_360_PATH', plugin_dir_path(__FILE__));
define('ADV_PANO_360_URL', plugin_dir_url(__FILE__));

// Begins execution of the plugin
function run_adv_pano_360() {
    $plugin = new AdvPano360\AdvPano360();
    $plugin->run();
}
run_adv_pano_360();