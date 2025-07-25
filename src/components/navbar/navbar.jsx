import { Logo } from "../../utils/getImg";
import s from "./navbar.module.css";


function Navbar() {
  return (
    <>
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.wrapperBox}>
          <div className={s.mainBox}>
            <div className={s.navLogo}>
            

              <img src={Logo} className={s.logoImg} alt="Ameen" />
            </div>
            <ul className={s.navMain}>
              <li className={s.mainLink}>Ustozlar</li>
              <li className={s.mainLink}>Partnerlar</li>
              <li className={s.mainLink}>To'plamalar</li>
              <li className={s.mainLink}>Bepul kurslar</li>
              <li className={s.mainLink}>Fikrlar</li>
            </ul>
          </div>
          <div className={s.nav_right}>
            {/* <select name="language" id="">
                <option value="uz">UZ</option>
                <option value="">RU</option>
                <option value="">Eng</option>
            </select> */}
            <button className={s.btnReg} type="submit">
              Ro'yxatdan o'tish
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
