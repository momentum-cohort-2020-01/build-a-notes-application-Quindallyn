fetch('http://localhost:3000/notes/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Hi', body: 'COOL' })
})
  .then(r => r.json())
  .then()

fetch('http://localhost:3000/notes/:id', {
  method: 'PATCH',
  headers: { 'Conent-Type': 'application/json' },
  body: JSON.stringify({ title: 'Hi', body: 'COOL' })
})
  .then(r => r.json())
  .then()

fetch('http://localhost:3000/notes/:id', {
  method: 'DELETE',
  headers: { 'Conent-Type': 'application/json' },
  body: JSON.stringify({ title: 'Hi', body: 'COOL' })
})
  .then(r => r.json())
  .then()
