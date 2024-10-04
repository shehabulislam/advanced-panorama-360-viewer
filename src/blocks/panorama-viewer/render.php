<?php
extract($attributes );

$className = $className ?? '';
$blockClassName = 'wp-block-adv-pano-360-panorama-viewer ' . $className . ' align' . $align;

?>

<div 
    class='<?php echo esc_attr( $blockClassName ); ?>' 
    data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
>
</div>