import "./Header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Instagram Felino</h1>

      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
      />
    </header>
  )
}

export default Header