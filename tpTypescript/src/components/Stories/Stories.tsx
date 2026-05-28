import "./Stories.css"

const stories = [
  { name: "Poda",  img: "https://cdn2.thecatapi.com/images/9j5.jpg" },
  { name: "Fidu",  img: "https://cdn2.thecatapi.com/images/bpc.jpg" },
  { name: "Bata",  img: "https://cdn2.thecatapi.com/images/6qi.jpg" },
  { name: "Syrup", img: "https://cdn2.thecatapi.com/images/a3h.jpg" },
  { name: "Boña",  img: "https://cdn2.thecatapi.com/images/cmd.jpg" },
  { name: "Momia", img: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg" },
]

function Stories() {
  return (
    <div className="stories">
      {stories.map((story, index) => (
        <div className="story" key={index}>
          <img src={story.img} alt={story.name} />
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Stories