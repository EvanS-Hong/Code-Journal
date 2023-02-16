var newPicture = document.getElementById('photoInput');
var oldImg = document.querySelector('.photo');
function imagePreview() {
  var newImg = document.getElementById('photoInput');
  oldImg.src = newImg.value;
}
newPicture.addEventListener('input', imagePreview);

var form = document.getElementById('form');
var ul = document.querySelector('ul');

function formSubmit(entry) {
  event.preventDefault();
  if (data.editing === null) {
    var title = document.getElementById('title');
    var photoInput = document.getElementById('photoInput');
    var notes = document.getElementById('notes');
    var newObj = {
      title: title.value,
      photoUrl: photoInput.value,
      text: notes.value,
      entryID: data.nextEntryId
    };
    data.entries.unshift(newObj);
    oldImg.src = '/images/placeholder-image-square.jpg';
    data.nextEntryId += 1;
    form.reset();
    var newElement = renderEntry(newObj);
    ul.prepend(newElement);
    if (data.entries.length !== 0) {
      toggleNoEntries();
    }
    viewSwap('entries');
  } else if (data.editing !== null) {
    var title2 = document.getElementById('title');
    var photoInput2 = document.getElementById('photoInput');
    var notes2 = document.getElementById('notes');
    data.editing = {
      title: title2.value,
      photoUrl: photoInput2.value,
      text: notes2.value,
      entryID: data.editing.entryID
    };
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing.entryID === data.entries[i].entryID) {
        data.entries[i] = data.editing;
        var editedEntry = data.entries[i];
      }
      var oldElement = document.querySelector('[data-entry-id]', data.entries[i].entryID);
      var editedElement = renderEntry(editedEntry);
      ul.replaceChild(editedElement, oldElement);
      var header = document.querySelector('.new-entry');
      header.textContent = 'New entry';
      data.editing = null;
      form.reset();
      oldImg.src = '/images/placeholder-image-square.jpg';
    }

  }
}

form.addEventListener('submit', formSubmit);

function renderEntry(entry) {

  var li = document.createElement('li');
  li.setAttribute('data-entry-id', entry.entryID);
  li.setAttribute('class', 'entry-item');

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

  var div3 = document.createElement('div');
  div3.setAttribute('class', 'row');
  div2.appendChild(div3);

  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  div3.appendChild(h2);

  var I = document.createElement('i');
  I.setAttribute('class', 'fa fa-pencil');
  I.setAttribute('aria-hidden', 'true');
  div3.appendChild(I);

  var p = document.createElement('p');
  p.textContent = entry.text;
  div2.appendChild(p);

  return li;
}

function domCreation() {
  var ul = document.querySelector('ul');
  for (var i = 0; i < (data.entries).length; i++) {
    var newElement = renderEntry(data.entries[i]);
    ul.appendChild(newElement);
  }

  viewSwap(data.view);

  if (data.entries.length === 0) {
    toggleNoEntries();
  }
}

document.addEventListener('DOMContentLoaded', domCreation);

function toggleNoEntries() {
  var noEntries = document.getElementById('empty');
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

function buttonSwap(event) {
  event.preventDefault();
  var button = event.target.getAttribute('data-view');
  viewSwap(button);
}

var entriesButton = document.querySelector('.entries');
var newForm = document.querySelector('.new');

entriesButton.addEventListener('click', buttonSwap);
newForm.addEventListener('click', buttonSwap);

function edit() {
  if (event.target.tagName === 'I') {
    viewSwap('entry-form');
    var closest = event.target.closest('.entry-item');
    var entryID = closest.getAttribute('data-entry-id');
    for (var i = 0; i < data.entries.length; i++) {
      if (entryID * 1 === data.entries[i].entryID) {
        data.editing = data.entries[i];
      }
    }
    var title = document.getElementById('title');
    var photoInput = document.getElementById('photoInput');
    var notes = document.getElementById('notes');
    title.value = data.editing.title;
    photoInput.value = data.editing.photoUrl;
    notes.value = data.editing.text;
    oldImg.src = photoInput.value;
    var header = document.querySelector('.new-entry');
    header.textContent = 'Edit entry';
  }
}
ul.addEventListener('click', edit);
