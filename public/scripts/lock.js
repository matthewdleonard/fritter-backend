/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllLocks(fields) {
  fetch('/api/lock')
    .then(showResponse)
    .catch(showResponse);
}

function viewLocksByAuthor(fields) {
  fetch(`/api/lock?author=${fields.author}`)
    .then(showResponse)
    .catch(showResponse);
}

function createLock(fields) {
  fetch('/api/lock', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function editLock(fields) {
  fetch(`/api/lock/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteLock(fields) {
  fetch(`/api/lock/${fields.id}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}
