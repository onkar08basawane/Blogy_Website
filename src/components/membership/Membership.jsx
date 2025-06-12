import React from 'react'
import styles from './membership.module.css'

const Membership = () => {
 const plans = [
  {
    title: 'Free Plan',
    subtitle: 'For Causal Readers',
    price: '$0',
    features: [ 'Access to all public blog posts', 'No ad-free experience', 'No access to exclusive content or tools','Cannot comment or bookmark articles'],
  },
  {
    title: 'Basic Plan',
    subtitle: 'For Regular Readers',
    price: '$29',
    features: ['All Free Plan features', 'Commenting and bookmarking enabled', 'Downloadable PDFs of blog content', 'Still shows light ads'],
    highlighted: true,
  },
  {
    title: 'Pro Plan',
    subtitle: 'For Dedicated Readers',
    price: '$49',
    features: ['All Basic Plan features', ' 100% Ad-free experience', 'AI-powered content recommendations', 'Early access to new features and articles'],
  },
];

  return (
    <div className={styles.wrapper}>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
        >
          <h2>{plan.title}</h2>
          <p className={styles.subtitle}>{plan.subtitle}</p>
          <p className={styles.price}>{plan.price}</p>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>✔ {feature}</li>
            ))}
          </ul>
          <button>Subscribe now</button>
        </div>
      ))}
    </div>
  );
};
export default Membership
