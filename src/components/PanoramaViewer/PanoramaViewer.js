import { useRef, useEffect } from "react";

export default function ({ attributes, viewer, setViewer }) {
  // const [viewer, setViewer] = useState(null);
  const { options = {} } = attributes;

  const ref = useRef();

  useEffect(() => {
    if (ref.current && window.pannellum) {
      const instance = pannellum.viewer(ref.current, {
        type: "equirectangular",
        panorama: "https://pannellum.org/images/alma.jpg",
        ...options,
      });
      setViewer(instance);
    }

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [attributes]);

  return (
    <>
      <div style={{ width: "100%", height: "400px" }} ref={ref}></div>
    </>
  );
}
