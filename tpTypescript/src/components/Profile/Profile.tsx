import { userData } from "../../data/userData"

import "./Profile.css"

function Profile() {
  return (
    <div className="profile">
      <img
        src={userData.profileImage}
        alt="profile"
      />

      <h2>{userData.username}</h2>

      <div className="profile-stats">
        <span>{userData.posts} posts</span>
        <span>{userData.followers} followers</span>
        <span>{userData.following} following</span>
      </div>

      <p>{userData.bio}</p>
    </div>
  )
}

export default Profile