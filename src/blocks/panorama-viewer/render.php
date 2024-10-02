<?php
extract($attributes );

$className = $className ?? '';
$blockClassName = 'adv-pano-360-panorama-viewer ' . $className . ' align' . $align;

?>

<div 
    class='<?php echo esc_attr( $blockClassName ); ?>' 
    id='ifbInstagramFeed-<?php echo esc_attr( $clientId ) ?>' 
    data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
>
</div>