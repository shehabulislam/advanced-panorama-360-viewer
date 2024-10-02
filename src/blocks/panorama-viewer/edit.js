import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, TextControl, Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { mediaUrl, showControls, customControls, isVirtualTour, title, author } = attributes;

  console.log("working fine, ki koris tui");
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Media", "adv-pano-360")}>
          <MediaUpload
            onSelect={(media) => setAttributes({ mediaUrl: media.url })}
            allowedTypes={["image"]}
            value={mediaUrl}
            render={({ open }) => <Button onClick={open}>{mediaUrl ? __("Replace media", "adv-pano-360") : __("Select media", "adv-pano-360")}</Button>}
          />
        </PanelBody>
        <PanelBody title={__("Controls", "adv-pano-360")}>
          <ToggleControl label={__("Show Controls", "adv-pano-360")} checked={showControls} onChange={(value) => setAttributes({ showControls: value })} />
          <TextControl label={__("Custom Controls", "adv-pano-360")} value={customControls} onChange={(value) => setAttributes({ customControls: value })} />
        </PanelBody>
        <PanelBody title={__("Virtual Tour", "adv-pano-360")}>
          <ToggleControl label={__("Enable Virtual Tour", "adv-pano-360")} checked={isVirtualTour} onChange={(value) => setAttributes({ isVirtualTour: value })} />
        </PanelBody>
        <PanelBody title={__("Metadata", "adv-pano-360")}>
          <TextControl label={__("Title", "adv-pano-360")} value={title} onChange={(value) => setAttributes({ title: value })} />
          <TextControl label={__("Author", "adv-pano-360")} value={author} onChange={(value) => setAttributes({ author: value })} />
        </PanelBody>
      </InspectorControls>
      <div className="adv-pano-360-preview">
        {mediaUrl ? <img src={mediaUrl} alt={__("360 Panorama Preview", "adv-pano-360")} style={{ maxWidth: "100%" }} /> : <p>{__("Select a 360 panorama image", "adv-pano-360")}</p>}
      </div>
    </div>
  );
}
