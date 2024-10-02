import { __ } from "@wordpress/i18n";
const { TabPanel, PanelBody, PanelRow } = wp.components;
const { InspectorControls } = wp.blockEditor;

import { useEffect, useRef } from "@wordpress/element";

import { General } from "./tabs/General";
import Style from "./tabs/Style";
import tabController from "../../utils/tabController";
import clickToCopy from "../../utils/clickToCopy";

const Settings = ({ attributes, setAttributes, isSelected, viewer, currentScene, renderPanorama }) => {
  const { style, additional, options, controls, basicControls, sceneFadeDuration, autoRotation } = attributes;

  const tooltip = useRef();

  const postType = wp.data.select("core/editor")?.getCurrentPostType() || "product";
  const postId = wp.data.select("core/editor")?.getCurrentPostId();

  useEffect(() => {
    tabController();
  }, [isSelected]);

  return (
    <InspectorControls>
      {postType === "panorama-lite" && (
        <PanelBody>
          <PanelRow>
            <div className="b3dviewer_front_shortcode">
              <input onClick={clickToCopy} value={`[panorama_lite id=${postId}]`} />
              <span ref={tooltip} className="htooltip">
                {__("Copy To Clipboard", "panorama-lite")}
              </span>
            </div>
          </PanelRow>
        </PanelBody>
      )}
      <TabPanel
        className="panorama-lite-tab-panel"
        activeClass="active"
        onSelect={(e) => {
          tabController();
        }}
        tabs={[
          {
            name: "general",
            title: __("General", "panorama-lite"),
            className: "general",
          },
          {
            name: "style",
            title: __("Style", "panorama-lite"),
            className: "style",
          },
        ]}
      >
        {(tab) => {
          return (
            <span>
              {tab.name === "general" && <General attributes={attributes} setAttributes={setAttributes} />}
              {tab.name === "style" && <Style attributes={attributes} setAttributes={setAttributes} />}
            </span>
          );
        }}
      </TabPanel>
    </InspectorControls>
  );
};

export default Settings;
