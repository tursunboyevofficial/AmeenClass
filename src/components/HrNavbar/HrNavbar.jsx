import { useState } from "react";
import { Logo } from "../../utils/getImg";
import s from "./HrNavbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";



function HrNavbar() {
  const [isOpen,  setIsOpen] = useState(true);
  const toggle = ()=>{
    setIsOpen(prev => !prev)
  }
  return (
    <>
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.wrapperBox}>
          <div className={s.mainBox}>
            <div className={s.navLogo}>
              <div className={s.buttonmenu}><AiOutlineMenu onClick={() => toggle()} /></div>
              <img src={Logo} className={s.logoImg} alt="Ameen" />
            </div>
            <ul className={`${s.navMain} `} >
              <li className={s.mainLink}>Kurs haqida qisqacha</li>
              <li className={s.mainLink}>Dastur</li>
              <li className={s.mainLink}>Ustozlar</li>
              <li className={s.mainLink}>Tariflar</li>
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
      <div className={`${s.burgernav} ${isOpen ? s.navMain2 : s.navMain1}`}>

      <ul className={s.navMain1}>
              <li className={s.mainLink2}>Ustozlar</li>
              <li className={s.mainLink2}>Partnerlar</li>
              <li className={s.mainLink2}>To'plamalar</li>
              <li className={s.mainLink2}>Bepul kurslar</li>
              <li className={s.mainLink2}>Fikrlar</li>
            </ul>
      </div>
    </>
  );
}

export default HrNavbar;
