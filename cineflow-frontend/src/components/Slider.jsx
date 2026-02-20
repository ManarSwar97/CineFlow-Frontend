import ImageSlider from "./ImageSlider";
import "../components/ImageSlider.css"
const Slider = () => {
const slides = [
  {
    url: "/images/fastAndFurious.png",
    title: "Fast & Furious",
    duration: "2h 20m",
    category: "Action, Crime, Thriller",
    description:
      "Dom and his crew face their most dangerous mission yet as global forces close in. High-speed chases, explosive stunts, and family loyalty collide in a race against time."
  },

  {
    url: "/images/theMazeRunner.png",
    title: "The Maze Runner",
    duration: "1h 53m",
    category: "Sci-Fi, Adventure, Survival",
    description:
      "A group of teenagers trapped inside a massive deadly maze must uncover its secrets and escape a mysterious organization controlling their fate."
  },
  {
    url: "/images/survivors.png",
    title: "28 Years Later",
    duration: "2h 05m",
    category: "Horror, Thriller, Post-Apocalyptic",
    description:
      "Decades after the rage virus outbreak, survivors struggle to rebuild society while facing new threats from the infected and from humanity itself."
  },

  {
    url: "/images/terror.png",
    title: "Send Help",
    duration: "1h 48m",
    category: "Horror, Survival, Thriller",
    description:
      "Stranded after a mysterious disaster, a group of strangers must rely on each other to survive while an unseen force stalks them in the darkness."
  }
];
  const containerStyles = {
    width: "100rem",
    height: "50rem",
    margin: "0 auto",
    marginTop: "140px",
  };
  return (
        <div className="hero-wrapper">
        <ImageSlider slides={slides} />
        </div>
  );
};

export default Slider;