import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Stories from "./components/Stories/Stories"
import Feed from "./components/Feed/Feed"
import Profile from "./components/Profile/Profile"

import "./styles/global.css"

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="content">
          <div className="feed-section">
            <Stories />
            <Feed />
          </div>

          <div className="profile-section">
            <Profile />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App