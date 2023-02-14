/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('javascript-local-storage');
function JsonSerialize() {
  var dataJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', dataJSON);
}

window.addEventListener('beforeunload', JsonSerialize);

if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}
