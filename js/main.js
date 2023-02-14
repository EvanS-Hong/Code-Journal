var newPicture = document.getElementById('photoInput');
var oldImg = document.querySelector('.photo');
function imagePreview() {
  var newImg = document.getElementById('photoInput');
  oldImg.src = newImg.value;
}
newPicture.addEventListener('input', imagePreview);

var nextEntryId = 0;
var entres = [];
var form = document.getElementById('form');
function formSubmit() {
  event.preventDefault();
  var title = document.getElementById('title');
  var photoInput = document.getElementById('photoInput');
  var notes = document.getElementById('notes');
  var newObj = {
    title: title.value,
    photoUrl: photoInput.value,
    text: notes.value,
    entryID: nextEntryId
  }; nextEntryId += 1;
  entres.push(newObj);
  oldImg.src = '/images/placeholder-image-square.jpg';
  form.reset();
}
form.addEventListener('submit', formSubmit);
