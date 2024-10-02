import { __ } from "@wordpress/i18n";
const { Panel, PanelBody, PanelRow } = wp.components;

import { TextControl } from "@wordpress/components";
// import BUnitControl from "../../components/BUnitControl/BUnitControl";

const { TextareaControl } = wp.components;

export default function Style() {
  return (
    <>
      <Panel>
        <PanelBody title={__("Style", "panorama-lite")}>
          <PanelRow>
            <label>{__("Width", "panorama-lite")}</label>
            {/* <BUnitControl
              value={style?.width}
              onChange={(width) => setAttributes({ style: { ...style, width } })}
              units={[
                { value: "px", label: "px", default: 500 },
                { value: "%", label: "%", default: 100 },
              ]}
            /> */}
          </PanelRow>
          <PanelRow>
            <label>{__("Height", "panorama-lite")}</label>
            <BUnitControl
              value={style?.height}
              onChange={(height) => setAttributes({ style: { ...style, height } })}
              units={[
                { value: "px", label: "px", default: 500 },
                { value: "%", label: "%", default: 100 },
                { value: "vh", label: "vh", default: 100 },
              ]}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title={__("Additional", "panorama-lite")}>
          <PanelRow>
            <label>{__("ID", "panorama-lite")}</label>
            <TextControl value={additional.ID} onChange={(ID) => setAttributes({ additional: { ...additional, ID } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("Class", "panorama-lite")}</label>
            <TextControl value={additional.Class} onChange={(Class) => setAttributes({ additional: { ...additional, Class } })} />
          </PanelRow>
          <PanelRow>
            <label>{__("CSS", "panorama-lite")}</label>
          </PanelRow>
          <TextareaControl value={additional.CSS} onChange={(CSS) => setAttributes({ additional: { ...additional, CSS } })} />
        </PanelBody>
      </Panel>
    </>
  );
}
