import "./Stories.css"

const stories = [
  "Poda",
  "Fidu",
  "Bata",
  "Syrup",
  "Boña",
  "Momia",
]

function Stories() {
  return (
    <div className="stories">
      {stories.map((story, index) => (
        <div className="story" key={index}>
          <img
            src={`https://cdn2.thecatapi.com/images/${index + 1}.jpg`}
            alt={story}
          />

          <p>{story}</p>
        </div>
      ))}
    </div>
  )
}

export default Stories