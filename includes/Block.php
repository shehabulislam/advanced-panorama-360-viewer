<?php

namespace AdvPano360;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Block {

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function register_block() {
        register_block_type(ADV_PANO_360_PATH . 'build/blocks/panorama-viewer');
    }
}