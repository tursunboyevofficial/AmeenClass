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
            <a onClick={() => navigate("/ustozlarimiz")}>Ustozlarimiz</a>
            <a onClick={() => navigate("/partnerlar")}>Partnerlar</a>
            <a onClick={() => navigate("/kurslar")}>Kurslar</a>
            <a onClick={() => navigate("/fikrlar")}>Fikrlar</a>
            <a onClick={() => navigate("/kontaktlar")}>Kontaktlar</a>
          </div>
          <div className={styles.links}>
            <a onClick={() => navigate("/join")}>Ameen.uz ga qo’shilish</a>
            <a onClick={() => navigate("/help-center")}>Help center</a>
            <a onClick={() => navigate("/faqs")}>FAQs</a>
          </div>  
        </div>

        
        <div className={styles.bottom}>
          <p>© 2025 Ameen uz. All rights reserved.</p>
          <div className={styles.legal}>
            <a onClick={() => navigate("/terms")}>Terms of Service</a>
            <a onClick={() => navigate("/privacy")}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
