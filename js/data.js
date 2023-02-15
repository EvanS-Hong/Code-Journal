/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('javascript-local-storage');
function JsonSerialize(entry) {
  var dataJSON = JSON.stringify(data.entries);
  var currentView = data.view;
  localStorage.setItem('javascript-local-storage', dataJSON);
  localStorage.setItem('current screen', currentView);
}

window.addEventListener('beforeunload', JsonSerialize);

if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}
