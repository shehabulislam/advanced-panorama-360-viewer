<?php

namespace AdvPano360;

class Block {

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function register_block() {
        register_block_type(ADV_PANO_360_PATH . 'build/blocks/panorama-viewer', array(
            'render_callback' => array($this, 'render_block'),
        ));
    }

    public function render_block($attributes) {
        $default_attributes = array(
            'mediaUrl' => '',
            'showControls' => true,
            'customControls' => '',
            'isVirtualTour' => false,
            'title' => '',
            'author' => '',
        );

        $attributes = wp_parse_args($attributes, $default_attributes);

        ob_start();
        include ADV_PANO_360_PATH . 'templates/panorama-viewer.php';
        return ob_get_clean();
    }
}