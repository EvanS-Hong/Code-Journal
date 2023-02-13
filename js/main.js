var newPicture = document.getElementById('photoInput');
function imagePreview() {
  var oldImg = document.querySelector('.photo');
  var newImg = document.getElementById('photoInput');
  oldImg.src = newImg.value;
}
newPicture.addEventListener('input', imagePreview);
/*
var form = document.getElementById('form');
function formSubmit() {
  event.preventDefault();
  var title = document.getElementById('title');
  var photoInput = document.getElementById('photoInput');
  var notes = document.getElementById('notes');
  var newObj = {
    title: title.value,
    photoUrl: photoInput.value,
    text: notes.value
  };
}
form.addEventListener('submit', formSubmit);
 */
