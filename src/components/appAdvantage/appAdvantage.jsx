import styles from './appAdvantage.module.scss';
import { featuresImage, benefitsLogo } from '../../utils/getImg';
import { useLocation,useNavigate } from 'react-router-dom';

export default function AppAdvantage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>

          
          <div className={styles.imageBox}>
            <img src={featuresImage} alt="Afzalliklar" />

            
            <div className={styles.notification}>
              <div className={styles.logo}>
                <img src={benefitsLogo} alt="Ameen logo" />
              </div>
              <div className={styles.text}>
                <div className={styles.title}>Tabriklaymiz!</div>
                <div className={styles.subtitle}>
                  Siz ishga qabul qilindingiz
                </div>
              </div>
            </div>
          </div>

          
          <div className={styles.infoBox}>
            <p className={styles.label}>AFZALLIKLAR</p>
            <h2 className={styles.title}>
              Ameen.uz bilan o‘rganing, yetakchilar qatoriga qo‘shiling.
            </h2>
            <p className={styles.text}>
              Zamonaviy kasblarni amaliy tarzda o‘rganing, real loyihalarda tajriba orttiring
              va eng nufuzli kompaniyalarda ishlash imkoniyatini qo‘lga kiriting.
              Ameen.uz — o‘qish bilan ishni bog‘laydigan platforma.
            </p>
            <button onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }} className={styles.button}>Batafsil</button>
          </div>
     

        </div> 
      </div>
    </section>
  );
}
