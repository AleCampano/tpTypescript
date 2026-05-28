import "./Header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Instagram Felino</h1>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Buscar"
          className="search-input"
        />
      </div>
    </header>
  )
}

export default Header