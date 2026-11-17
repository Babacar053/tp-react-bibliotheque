import { useState } from 'react'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', estDisponible: true },
    { id: 2, titre: 'Une si longue lettre', auteur: 'Mariama Bâ', estDisponible: true },
    { id: 3, titre: 'Les Misérables', auteur: 'Victor Hugo', estDisponible: false },
    { id: 4, titre: "L'Étranger", auteur: 'Albert Camus', estDisponible: true },
  ])
  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')

  const nbDisponibles = books.filter((b) => b.estDisponible).length

  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((b) =>
        b.id === bookId ? { ...b, estDisponible: !b.estDisponible } : b
      )
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (titre.trim() === '' || auteur.trim() === '') return
    setBooks([
      ...books,
      { id: Date.now(), titre: titre.trim(), auteur: auteur.trim(), estDisponible: true },
    ])
    setTitre('')
    setAuteur('')
  }

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h1>Bibliothèque : {nbDisponibles} livre(s) disponible(s)</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {books.map((book) => (
        <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
      ))}
    </div>
  )
}

export default App
