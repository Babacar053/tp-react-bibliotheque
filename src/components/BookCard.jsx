function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  const styleCarte = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '10px',
    margin: '10px 0',
    textAlign: 'left',
  }

  return (
    <div style={styleCarte}>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>
      <p>{estDisponible ? '✅ Disponible' : '❌ Emprunté'}</p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  )
}

export default BookCard
