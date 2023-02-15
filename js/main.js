var newPicture = document.getElementById('photoInput');
var oldImg = document.querySelector('.photo');
function imagePreview() {
  var newImg = document.getElementById('photoInput');
  oldImg.src = newImg.value;
}
newPicture.addEventListener('input', imagePreview);

var nextEntryId = 0;
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
  data.entries.unshift(newObj);
  oldImg.src = '/images/placeholder-image-square.jpg';
  form.reset();

  renderEntry();
  var newElement = renderEntry(entry);
  ul.prepend(newElement);

  viewSwap('entires');

  if (data.entries.length === 0) {
    toggleNoEntries();
  }

}
form.addEventListener('submit', formSubmit);

function renderEntry(entry) {
  var li = document.createElement('li');

  var div1 = document.createElement('div');
  div1.setAttribute('class', 'row');
  li.appendChild(div1);

  var img = document.createElement('img');
  img.src = entry.photoUrl;
  img.setAttribute('class', 'column-half');
  div1.appendChild(img);

  var div2 = document.createElement('div');
  div2.setAttribute('class', 'column-half');
  div1.appendChild(div2);

  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  div2.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = entry.text;
  div2.appendChild(p);

  return li;
}

var ul = document.querySelector('ul');

function domCreation() {
  var ul = document.querySelector('ul');
  for (var i = 0; i < (data.entries).length; i++) {
    var newElement = renderEntry(data.entries[i]);
    ul.appendChild(newElement);
  }
  viewSwap(data.view);
}
document.addEventListener('DOMContentLoaded', domCreation);

function toggleNoEntries() {
  var noEntries = document.querySelector('.empty');
  if (data.entries.length === 0) {
    noEntries.className = '';
  } else {
    noEntries.className = 'hidden';
  }
}

function viewSwap(viewName) {
  var tab1 = document.querySelector('.tab1');
  var tab2 = document.querySelector('.tab2');
  if (viewName === 'entries') {
    tab1.className = 'tab1 hidden';
    tab2.className = 'tab2';
  } else if (viewName === 'entry-form') {
    tab1.className = 'tab1';
    tab2.className = 'tab2 hidden';
  }
  data.view = viewName;
}
