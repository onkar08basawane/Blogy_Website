import React from 'react'
import Styles from './Stories.module.css'
function Stories () {
    const stories = [
        { 
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-1.jpg",
      title: "New technology is not good or evil in and of itself",
      description:
        "Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam tristique augue ut mattis vulputate. Duis et lorem in odio ultricies porttitor.",
      buttons: ["Design", "Idea", "Review"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-2.jpg",
      title: "It’s a new era in design, there are no rules",
      description:
        "Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis",
      buttons: ["Creative", "Product"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-3.jpg",
      title: "Perfection has to do with the end product",
      description:
        "Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut rutrum quam quam, eu eleifend est blandit et. Vivamus",
      buttons: ["Design", "Creative", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-4.jpg",
      title: "Everyone has a different life story",
      description:
        "Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium. Nunc vero a",
      buttons: ["People", "Story"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-3.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-5.jpg",
      title: "The difference is quality",
      description:
        "Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Atque his de rebus et splendida est eorum et illustris oratio.",
      buttons: ["Design", "Lifestyle", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-6.jpg",
      title: "Problems are not stop signs, they are guidelines",
      description:
        "Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae.",
      buttons: ["Idea", "Creating"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    }
    ];
  return (
      <>
      <div className={Styles.title}>
        Get started with our <strong>best stories</strong>
      </div>

      <div className={Styles.container}>
        {stories.map((story, index) => (
          <div className={Styles.storyCard} key={index}>
            <div className={Styles.imageContainer}>
              <img src={story.img} alt={`Story ${index + 1}`} />
              <div className={Styles.logo}>
                <img src={story.logo} alt={`Logo ${index + 1}`} />
              </div>
            </div>
            <div className={Styles.buttonContainer}>
              {story.buttons.map((button, btnIndex) => (
                <button key={btnIndex} className={Styles.button}>
                  {button}
                </button>
              ))}
            </div>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stories
