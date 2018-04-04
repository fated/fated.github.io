function showPopup() {
  var popup = document.getElementById("popup_content");
  popup.style.visibility = "visible";
  document.getElementById("popup").onclick = hidePopup;
}

function hidePopup() {
  var popup = document.getElementById("popup_content");
  popup.style.visibility = "hidden";
  document.getElementById("popup").onclick = showPopup;
}
