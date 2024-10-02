export default function clickToCopy(e) {
  const input = e.target;
  input.select();
  input.setSelectionRange(0, 30);
  document.execCommand("copy");
  tooltip.current.innerHTML = __("Copied Successfully!", "panorama-lite");
  setTimeout(() => {
    tooltip.current.innerHTML = __("Copy To Clipboard", "panorama-lite");
  }, 1500);
}
