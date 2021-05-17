function addLink(event) {
  event.preventDefault();
  var pagelink = '\n\n для чого текст копіюєш ? (джерело)url: ' + document.location.href,
    copytext = pagelink;
  //window.getSelection() + pagelink;
  navigator.clipboard.writeText(copytext);
  //if (window.clipboardData) {
  //  window.clipboardData.setData('Text', copytext);
  //}
}
document.addEventListener('copy', addLink);






