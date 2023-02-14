/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var entres = [];
var previousEntriesJSON = localStorage.getItem('javascript-local-storage');
function JsonSerialize() {
  var entresJSON = JSON.stringify(entres);
  localStorage.setItem('javascript-local-storage', entresJSON);
}

window.addEventListener('beforeunload', JsonSerialize);

if (previousEntriesJSON !== null) {
  entres = JSON.parse(previousEntriesJSON);
}
