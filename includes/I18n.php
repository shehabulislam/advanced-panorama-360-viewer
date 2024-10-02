<?php

namespace AdvPano360;

class I18n {

    public function load_plugin_textdomain() {
        load_plugin_textdomain(
            'adv-pano-360',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }
}