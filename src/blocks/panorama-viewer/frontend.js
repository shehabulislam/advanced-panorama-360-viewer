document.addEventListener("DOMContentLoaded", function () {
  const viewers = document.querySelectorAll(".adv-pano-360-panorama-viewer");
  viewers.forEach((viewer) => {
    const attributes = JSON.parse(viewer.dataset.attributes);
    console.log("workign fine", attributes);

    // Initialize your panorama viewer library here
    // For example, if using Pannellum:
    // pannellum.viewer(viewer, {
    //     type: 'equirectangular',
    //     panorama: mediaUrl,
    //     autoLoad: true,
    //     title: title,
    //     author: author,
    //     showControls: showControls,
    //     // Add more options based on your attributes
    // });
  });
});
