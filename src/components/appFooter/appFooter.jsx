import React from "react";
import styles from "./appFooter.module.scss";
import {
    ameenicon,
  instaicon,
  telegramicon,
  youtubeicon,
  facebookicon,
} from "../../utils/getImg";
import { useNavigate } from "react-router-dom";

export default function AppFooter() {
  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      console.log('scrool');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
       
        <div className={styles.top}>
          <img
            src={ameenicon}
            alt="Ameen Class"
            className={styles.logo}
            onClick={() => navigate("/")}
          />
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instaicon} alt="Instagram" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer">
              <img src={telegramicon} alt="Telegram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtubeicon} alt="YouTube" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookicon} alt="Facebook" />
            </a>
          </div>
        </div>

        
        <div className={styles.linkBox}>
          <div className={styles.links}>
            <a onClick={() => scroll("appteacher")}>Ustozlarimiz</a>
            <a onClick={() => scroll("apppartners")}>Partnerlar</a>
            <a onClick={() => scroll("appcourse")}>Kurslar</a>
            <a onClick={() => scroll("appcomment")}>Fikrlar</a>
          </div>
          <div className={styles.links}>
            <a onClick={() => scroll("#")}>Ameen.uz ga qo’shilish</a>
            <a onClick={() => scroll("#")}>Help center</a>
            <a onClick={() => scroll("appfax")}>FAQs</a>
          </div>  
        </div>

        
        <div className={styles.bottom}>
          <p>© 2025 Ameen uz. All rights reserved.</p>
          <div className={styles.legal}>
            <a onClick={() => navigate("#")}>Terms of Service</a>
            <a onClick={() => navigate("#")}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
