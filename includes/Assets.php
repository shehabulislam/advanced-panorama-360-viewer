<?php

namespace AdvPano360;

class Assets {

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function enqueue_styles() {
        wp_enqueue_style($this->plugin_name, ADV_PANO_360_URL . 'build/css/frontend.css', array(), $this->version, 'all');
    }

    public function enqueue_scripts() {
        wp_enqueue_script($this->plugin_name, ADV_PANO_360_URL . 'build/js/frontend.js', array('jquery'), $this->version, true);
    }

    public function enqueue_admin_assets() {
        wp_enqueue_style($this->plugin_name . '-admin', ADV_PANO_360_URL . 'build/css/admin.css', array(), $this->version, 'all');
    }

    public function enqueue_block_editor_assets() {
        wp_enqueue_script(
            $this->plugin_name . '-block-editor',
            ADV_PANO_360_URL . 'build/js/blocks.js',
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
            $this->version,
            true
        );
    }

    public function enqueue_libraries(){
        wp_register_script(
            'pannellum-2.5.6',
            ADV_PANO_360_URL . 'lib/pannellum/pannellum.js',
            array(),
            '2.5.6',
            false
        );
        wp_register_style(
            'pannellum-2.5.6',
            ADV_PANO_360_URL . 'lib/pannellum/pannellum.css',
            array(),
            '2.5.6',
            'all'
        );
    }
}