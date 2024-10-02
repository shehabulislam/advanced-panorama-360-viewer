import { __ } from "@wordpress/i18n";
const { Panel, PanelBody, PanelRow, FormToggle } = wp.components;
import { produce } from "immer";

import { RangeControl } from "@wordpress/components";
import BMediaUpload from "../../../components/BMediaUpload/BMediaUpload";
import { TextControl } from "@wordpress/components";
// import BMediaUpload from "../../components/BMediaUpload/BMediaUpload";
// import Scenes from "./Scenes";

export function General({ attributes, setAttributes }) {
  const { options, controls, scene } = attributes;
  const { title, author, panorama, hotSpots, showAuthor, showTitle } = scene;

  const updateScene = (key, value) => {
    const newScene = produce(scene, (draft) => {
      draft[key] = value;
    });

    setAttributes({ scene: newScene });
  };

  return (
    <>
      <Panel>
        {/* <Scenes renderPanorama={renderPanorama} currentScene={currentScene} attributes={attributes} setAttributes={setAttributes} /> */}
        {/* {currentScene && <HotSpot currentScene={currentScene} viewer={viewer} attributes={attributes} setAttributes={setAttributes} />} */}
        <PanelBody title="Scene" initialOpen={true}>
          <BMediaUpload
            value={panorama}
            placeholder={__("Scene", "panorama-lite")}
            onSelect={(panorama) => updateScene("panorama", panorama)}
            type={["image"]}
            label={__("Scene URL", "panorama-lite")}
          />
          <TextControl label={__("Title", "panorama-lite")} value={title} onChange={(title) => updateScene("title", title)} />
          <TextControl label={__("Author", "panorama-lite")} value={author || ""} onChange={(author) => updateScene("author", author)} />
          <PanelRow>
            <label>{__("Show Title", "panorama-lite")}</label>
            <FormToggle checked={scene?.showTitle} onChange={() => updateScene("showTitle", !showTitle)} />
          </PanelRow>
          <PanelRow>
            <label>{__("Show Author", "panorama-lite")}</label>
            <FormToggle checked={scene?.showAuthor} onChange={() => updateScene("showAuthor", !showAuthor)} />
          </PanelRow>
        </PanelBody>
        <PanelBody title={__("Options", "panorama-lite")} initialOpen={false}>
          <PanelRow>
            <label>{__("Autoload", "panorama-lite")}</label>
            <FormToggle checked={options?.autoLoad} onChange={() => setAttributes({ options: { ...options, autoLoad: !options?.autoLoad } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Show Basic Controls", "panorama-lite")}</label>
            <FormToggle checked={options?.showControls} onChange={() => setAttributes({ options: { ...options, showControls: !options?.showControls } })} />
          </PanelRow>

          <PanelRow>
            <label>{__("Show Next Prev Button", "panorama-lite")}</label>
            <FormToggle checked={options?.nextPrevBtn} onChange={() => setAttributes({ options: { ...options, nextPrevBtn: !options?.nextPrevBtn } })} />
          </PanelRow>

          <PanelRow>
            <label>{__("Mouse Draggable", "panorama-lite")}</label>
            <FormToggle checked={options?.draggable} onChange={() => setAttributes({ options: { ...options, draggable: !options?.draggable } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Mouse Zoom", "panorama-lite")}</label>
            <FormToggle checked={options?.mouseZoom} onChange={() => setAttributes({ options: { ...options, mouseZoom: !options?.mouseZoom } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Keyboard Zoom", "panorama-lite")}</label>
            <FormToggle checked={options?.keyboardZoom} onChange={() => setAttributes({ options: { ...options, keyboardZoom: !options?.keyboardZoom } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Compass", "panorama-lite")}</label>
            <FormToggle checked={options?.compass} onChange={() => setAttributes({ options: { ...options, compass: !options?.compass } })} />
          </PanelRow>
          <RangeControl
            label={__("Scene Fade Duration", "panorama-lite")}
            value={options.sceneFadeDuration}
            onChange={(sceneFadeDuration) => setAttributes({ options: { ...options, sceneFadeDuration } })}
            min={0}
            step={1}
            max={3000}
          />
          {/* <BMediaUpload
            value={options?.preview}
            placeholder={__("Preview Image", "panorama-lite")}
            onSelect={(preview) => setAttributes({ options: { ...options, preview } })}
            type={["image"]}
            label={__("Preview Image", "panorama-lite")}
          /> */}
          <RangeControl
            label={__("Auto Rotation", "panorama-lite") + ` (${options.autoRotate} deg per second)`}
            value={options.autoRotate}
            onChange={(autoRotate) => setAttributes({ options: { ...options, autoRotate } })}
            min={-50}
            step={1}
            max={50}
            renderTooltipContent={(value) => `${value}dps`}
          />
          <span>
            <b>{__("Note", "panorama-lite")}: </b>
            {__("set 0 to disable auto rotate", "panorama-lite")}
          </span>
        </PanelBody>
        <PanelBody title={__("Controls Button", "panorama-lite")} initialOpen={false}>
          <PanelRow>
            <label>{__("Move Up", "panorama-lite")}</label>
            <FormToggle checked={controls?.moveUp} onChange={() => setAttributes({ controls: { ...controls, moveUp: !controls?.moveUp } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Move Down", "panorama-lite")}</label>
            <FormToggle checked={controls?.moveDown} onChange={() => setAttributes({ controls: { ...controls, moveDown: !controls?.moveDown } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Move Left", "panorama-lite")}</label>
            <FormToggle checked={controls?.moveLeft} onChange={() => setAttributes({ controls: { ...controls, moveLeft: !controls?.moveLeft } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Move Right", "panorama-lite")}</label>
            <FormToggle checked={controls?.moveRight} onChange={() => setAttributes({ controls: { ...controls, moveRight: !controls?.moveRight } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Zoom In", "panorama-lite")}</label>
            <FormToggle checked={controls?.zoomIn} onChange={() => setAttributes({ controls: { ...controls, zoomIn: !controls?.zoomIn } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Zoom Out", "panorama-lite")}</label>
            <FormToggle checked={controls?.zoomOut} onChange={() => setAttributes({ controls: { ...controls, zoomOut: !controls?.zoomOut } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Fullscreen", "panorama-lite")}</label>
            <FormToggle checked={controls?.fullscreen} onChange={() => setAttributes({ controls: { ...controls, fullscreen: !controls?.fullscreen } })} />
          </PanelRow>
        </PanelBody>
      </Panel>
    </>
  );
}
