<?php

namespace AdvPano360;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class I18n {

    public function load_plugin_textdomain() {
        load_plugin_textdomain(
            "advanced-panorama-360-viewer",
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }
}