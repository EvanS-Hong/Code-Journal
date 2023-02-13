var newPicture = document.getElementById('photoInput');
function imagePreview() {
  var oldImg = document.querySelector('.photo');
  var newImg = document.getElementById('photoInput');
  oldImg.src = newImg.value;
}
newPicture.addEventListener('input', imagePreview);
