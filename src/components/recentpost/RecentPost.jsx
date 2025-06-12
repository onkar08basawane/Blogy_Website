import React from 'react'
import styles from './RecentPost.module.css'
import HeroBg from './herobg/HeroBg';
function RecentPost() {
  const recent = [
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/recent-1.jpg",
      title: "Creating is a privilege but it’s also a gift",
      description:
        "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur",
      buttons: ["Lifestyle", "People", "Review"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/recent-2.jpg",
      title: "Being unique is better than being perfect",
      description:
        "Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis",
      buttons: ["Design", "Product", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/recent-3.jpg",
      title: "Now we’re getting somewhere",
      description:
        "Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut rutrum quam quam, eu eleifend est blandit et. Vivamus",
      buttons: ["Idea", "Product", "Review"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/recent-4.jpg",
      title:
        "The trick to getting more done is to have the freedom to roam around",
      description:
        "Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium. Nunc vero a",
      buttons: ["Lifestyle", "Design"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/recent-5.jpg",
      title: "Every day, in every city and town across the country",
      description:
        "Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Atque his de rebus et splendida est eorum et illustris oratio.",
      buttons: ["People", "Story", "Lifestyle"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/recent-6.jpg",
      title: "Your voice, your mind, your story, your vision",
      description:
        "Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae.",
      buttons: ["People", "Review", "Story"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
  ];

  return (
  <>
  <HeroBg/>
  <div className={styles.Container}>
    <div className={styles.size}></div>
        <div className={styles.titleSection}>
          <div className={styles.title}>
            <strong>Recent Posts</strong>
          </div>

          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <img
                src="https://codewithsadee.github.io/blogy/assets/images/author-5.jpg"
                className={styles.logo}
              />
              <img
                src="https://codewithsadee.github.io/blogy/assets/images/author-4.jpg"
                className={styles.logo}
              />
              <img
                src="https://codewithsadee.github.io/blogy/assets/images/author-3.jpg"
                className={styles.logo}
              />
              <img
                src="https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
                className={styles.logo}
              />
              <img
                src="https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
                className={styles.logo}
              />
            </div>
          </div>
          <div className={styles.Authors}>
            <p>Meet our top authors</p>
          </div>

        </div>
        <hr/>
        <div className={styles.container}>
          {recent.map((item, index) => (
            <div className={styles.latelyCard} key={index}>
              <img src={item.img} alt={`Lately ${index + 1}`} />
              <div className={styles.buttonContainer}>
                {item.buttons.map((button, btnIndex) => (
                  <button key={btnIndex} className={styles.button}>
                    {button}
                  </button>
                ))}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button className={styles.loadMoreButton}>Load More</button>
        <hr />
      </div>
  </>
  )
}

export default RecentPost
