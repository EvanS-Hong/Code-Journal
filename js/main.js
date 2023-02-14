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

function formSubmit(entry) {
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

function renderEntry(entry) {
  var li = document.createElement('li');

  var div1 = document.createElement('div');
  div1.setAttribute('class', 'row');
  li.appendChild(div1);

  var img = document.createElement('img');
  img.setAttribute('class', 'column-half');
  div1.appendChild(img);

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'column-half');
  div1.appendChild(div2);

  var h2 = document.createElement('h2');
  div2.appendChild(h2);

  var p = document.createElement('p');
  div2.appendChild(p);

  return li;
}

var ul = document.querySelector('ul');
for (var i = 0; i < (data.entries).length; i++) {
  var newElement = renderEntry(data.entries[i]);
  ul.appendChild(newElement);
}
