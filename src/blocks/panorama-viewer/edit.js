import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import PanoramaViewer from "../../components/PanoramaViewer/PanoramaViewer";
import { useState } from "react";
import Settings from "./settings";

export default function Edit(props) {
  const [viewer, setViewer] = useState(null);
  const { attributes } = props;

  return (
    <div {...useBlockProps()}>
      <Settings {...props} />
      <PanoramaViewer attributes={attributes} viewer={viewer} setViewer={setViewer} />
    </div>
  );
}
