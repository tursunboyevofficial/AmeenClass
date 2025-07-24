import { useState } from 'react'; // ❗ kerakli hook
import styles from './appFax.module.scss';

const faqs = [
  {
    question: 'Do you provide customer support?',
    answer:
      'Vivamus suscipit tortor eget felis porttitor volutpat...',
  },
  {
    question: 'How often will you update the file and is it included in support?',
    answer:
      'Vivamus suscipit tortor eget felis porttitor volutpat...',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes — you can upgrade or downgrade your plan at any time via your account settings.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'We offer a 14-day free trial on all paid plans. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, MasterCard, American Express, and PayPal.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Your data is encrypted at rest and in transit. We follow industry-leading security practices.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null); // ❗ holat

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.faqbox}>
          <p className={styles.label}>FAQs</p>
          <h2 className={styles.title}>Tez so'raladigan savollar</h2>
          <p className={styles.subtitle}>
            Answer to your life questions are here and learn why to use our
            awesome product
          </p>

          <div className={styles.accordion}>
            {faqs.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <button
                  className={styles.header}
                  onClick={() => toggle(idx)} // ❗ onClick ulandi
                >
                  <span>{item.question}</span>
                  <span className={styles.icon}>
                    {openIndex === idx ? '-' : '+'}
                  </span>
                </button>
                {openIndex === idx && ( // ❗ faqat ochilganda ko‘rsatish
                  <div className={styles.panel}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
