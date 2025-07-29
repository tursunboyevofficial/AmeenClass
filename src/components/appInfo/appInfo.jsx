import styles from "./appInfo.module.scss";
import imgBg from "../../style/imaages/Frame1.webp";
import { playIcon } from "../../utils/getImg";
import { useNavigate } from "react-router-dom";

function AppInfo() {
  const navigate = useNavigate();
  const sendPage = () => {
    navigate('/login')
  }
  return (
    <div>
      <div className={styles.infoImg}>
        <div className={styles.bgImg}></div>
        <div className={styles.infoTitle}>
          <div className={styles.textBox}>
            <p className={styles.textp}>
              <span></span>HR MANAGEMENT, PROJECT MANAGEMENT
            </p>
            <h1 className={styles.heroTitle}>
              Eng yaxshilaridan ta’lim olish endi yanada oson
            </h1>
            <div className={styles.infoBtns}>
              <button className={styles.btnHero} onClick={sendPage}>Ro'yxatdan o'tish</button>
              <div className={styles.btnRightBox}>
                <div className={styles.doira}>
                  <div className={styles.doira1}>
                    {" "}
                    <img src={playIcon} alt="logo" />{" "}
                  </div>
                 
                </div>
                <p className={styles.rightText}>SEE OUR ACTIVITY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
