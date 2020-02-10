function print (value) {
  console.log(value)
  return value
}

function q (selector) {
  return document.querySelector(selector)
}

function getAllNotes () {
  return fetch('http:localhost:3000/notes/', {
    method: 'GET'
  })
    .then(r => r.json())
}

function createNotesHTML (notes) {
  let notesStr = '<ul id="notes-list">'
  for (const note of notes) {
    notesStr += createNoteHTML(note)
  }
  notesStr += '</ul>'
  return notesStr
}

function createNoteHTML (note) {
  return `<li data-note-id="${note.id}">${note.note} <button class="delete">Delete</button></li>`
}

function postNewNote (noteText) {
  return fetch('http://localhost:3000/notes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ note: noteText, done: false, created: moment().format() })
  })
    .then(r => r.json())
}
function renderNotesList (notes) {
  const notesHTML = createNotesHTML(notes)
  const notesSection = document.querySelector('#notes')
  notesSection.innerHTML = notesHTML
}

function renderNewNote (note) {
  const noteHTML = createNoteHTML(note)
  const notesList = document.querySelector('#notes-list')
  notesList.insertAdjacentHTML('beforeend', noteHTML)
}

getAllNotes().then(renderNotesList)

q('#new-note-form').addEventListener('submit', event => {
  event.preventDefault()
  const noteTextField = q('#note-text')
  const noteText = noteTextField.value
  noteTextField.value = ''
  postNewNote(noteText).then(renderNewNote)
})

q('#notes').addEventListener('click', event => {
  if (event.target.matches('.delete')) {
    print('delete ' + event.target.parentElement.dataset.noteId)
  }
})

// fetch('http://localhost:3000/notes/:id', {
//   method: 'PATCH',
//   headers: { 'Conent-Type': 'application/json' },
//   body: JSON.stringify({ title: 'Hi', body: 'COOL' })
// })
//   .then(r => r.json())
//   .then()

// fetch('http://localhost:3000/notes/:id', {
//   method: 'DELETE',
//   headers: { 'Conent-Type': 'application/json' },
//   body: JSON.stringify({ title: 'Hi', body: 'COOL' })
// })
//   .then(r => r.json())
//   .then()
