/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllStoreItems(fields) {
  fetch('/api/store')
    .then(showResponse)
    .catch(showResponse);
}

function viewAllStoreItemsByAuthor(fields) {
  fetch(`/api/store?author=${fields.author}`)
    .then(showResponse)
    .catch(showResponse);
}


function editStoreItem(fields) {
  fetch(`/api/store/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteStoreItem(fields) {
  fetch(`/api/store/${fields.id}`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}


function createStoreItem(fields) {
  fetch('/api/store', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
