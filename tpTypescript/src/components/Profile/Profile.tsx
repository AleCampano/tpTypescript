import { userData } from "../../data/userData"

import "./Profile.css"

function Profile() {
  return (
    <div className="profile">
      {/* Foto de perfil */}
      <img
        src={userData.profileImage}
        alt="profile"
        className="profile-image"
      />

      {/* Username */}
      <h2>{userData.username}</h2>

      {/* Estadísticas */}
      <div className="profile-stats">
        <div>
          <strong>{userData.posts}</strong>
          <span> Publicaciones</span>
        </div>

        <div>
          <strong>{userData.followers}</strong>
          <span> Seguidores</span>
        </div>

        <div>
          <strong>{userData.following}</strong>
          <span> Siguiendo</span>
        </div>
      </div>

      {/* Biografía */}
      <p className="profile-bio">
        {userData.bio}
      </p>

      {/* Botones */}
      <div className="profile-buttons">
        <button>Editar Perfil</button>
      </div>

      {/* Publicaciones */}
      <div className="profile-posts">
        {userData.userPosts.map(
          (post, index) => (
            <img
              key={index}
              src={post}
              alt="post"
            />
          )
        )}
      </div>
    </div>
  )
}

export default Profile