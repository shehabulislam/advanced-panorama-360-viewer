document.addEventListener("DOMContentLoaded", function () {
  const viewers = document.querySelectorAll(".adv-pano-360-viewer");

  viewers.forEach((viewer) => {
    const mediaUrl = viewer.dataset.mediaUrl;
    const showControls = viewer.dataset.showControls === "true";
    const customControls = viewer.dataset.customControls;
    const isVirtualTour = viewer.dataset.isVirtualTour === "true";
    const title = viewer.dataset.title;
    const author = viewer.dataset.author;
    console.log("workign fine");

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
