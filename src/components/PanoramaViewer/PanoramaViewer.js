import { useRef, useEffect } from "react";

import "./style.scss";

export default function ({ attributes, viewer, setViewer }) {
  // const [viewer, setViewer] = useState(null);
  const { options = {}, controls = {} } = attributes;

  const ref = useRef();

  useEffect(() => {
    if (ref.current && window.pannellum) {
      ref.current.innerHTML = `<div id="controls"></div>`;
      const instance = pannellum.viewer(ref.current, {
        type: "equirectangular",
        panorama: "https://pannellum.org/images/alma.jpg",
        ...options,
      });
      window.viewer = instance;
      setViewer(instance);
    }

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [attributes]);

  useEffect(() => {
    if (ref.current) {
      const controlIcons = {
        moveUp: "&#9650;",
        moveDown: "&#9660;",
        moveLeft: "&#9664;",
        moveRight: "&#9654;",
        zoomIn: "&plus;",
        zoomOut: "&minus;",
        fullscreen: "&#x2922;",
      };
      console.log("working ", controls);
      const controlsElement = ref.current.querySelector("#controls");
      if (controlsElement) {
        controlsElement.innerHTML = "";
        console.log({ controlsElement });
        Object.keys(controls).map((key) => {
          if (controls[key]) {
            console.log("appending", key);
            const div = document.createElement("div");
            div.classList.add("ctrl");
            div.innerHTML = controlIcons[key];
            controlsElement.append(div);
            div.addEventListener("click", function () {
              key === "moveUp" && viewer.setPitch(viewer.getPitch() + 10);
              key === "moveDown" && viewer.setPitch(viewer.getPitch() - 10);
              key === "moveLeft" && viewer.setYaw(viewer.getYaw() - 10);
              key === "moveRight" && viewer.setYaw(viewer.getYaw() + 10);
              key === "zoomIn" && viewer.setHfov(viewer.getHfov() - 10);
              key === "zoomOut" && viewer.setHfov(viewer.getHfov() + 10);
              key === "fullscreen" && viewer.toggleFullscreen();
            });
          }
        });
      }
    }

    return () => {
      if (viewer) {
        console.log(viewer);
        viewer.destroy();
      }
    };
  }, [controls]);

  return (
    <>
      <div style={{ width: "100%", height: "400px" }} ref={ref}>
        <div id="controls"></div>
      </div>
    </>
  );
}
