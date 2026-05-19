import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <nav>
        <ul>
          <li>🏠 Home</li>
          <li>🔍 Explore</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar