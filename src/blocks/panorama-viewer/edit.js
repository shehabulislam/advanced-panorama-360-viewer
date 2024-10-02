import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import PanoramaViewer from "../../components/PanoramaViewer/PanoramaViewer";
import { useState, useEffect } from "react";
import Settings from "./settings";

export default function Edit(props) {
  const [viewer, setViewer] = useState(null);
  const { attributes, setAttributes } = props;
  const { clientId, scene, style, options, align, additional } = attributes;

  //generate new unique ID
  useEffect(() => {
    setAttributes({ clientId: "adv-pano-360" + props.clientId.substr(0, 8) });
  }, [props.clientId]);

  useEffect(() => {
    let css = `#${clientId} .pnlm-title-box {display: ${scene.showTitle ? "" : "none"};}`;
    css += `#${clientId} .pnlm-author-box {display: ${scene.showAuthor ? "" : "none"};}`;
    css += `#${clientId} .panorama-lite {height: ${style.height}; width: ${style.width}}`;
    css += `#${clientId} .panorama-lite .next_prev{display: ${options?.nextPrevBtn ? "flex" : "none"};}`;
    css += `#${clientId} .panorama-lite {${align === "right" ? "margin-left:auto" : align === "center" ? "margin: auto" : ""}}`;
    css += additional?.CSS;
    setAttributes({ css });
  }, [scene, style, clientId, additional, align]);

  return (
    <div {...useBlockProps()}>
      <Settings {...props} />
      <PanoramaViewer attributes={attributes} viewer={viewer} setViewer={setViewer} />
    </div>
  );
}
