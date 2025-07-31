import { useState } from "react";
import { Logo } from "../../utils/getImg";
import s from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';



function Navbar() {
  const topLogo = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  const [isOpen,  setIsOpen] = useState(true);
  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      console.log('scrool');
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(prev => !prev)
    }
  };
  const toggle = ()=>{
    setIsOpen(prev => !prev)
  }
  const navigate = useNavigate();
  const sendPage = () => {
    navigate('/login')
  }
  return (
    <>
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.wrapperBox}>
          <div className={s.mainBox}>
            <div className={s.navLogo}>
              <div className={s.buttonmenu} onClick={() => toggle()}>{!isOpen ?  <XMarkIcon style={{ width: 24, height: 24, color: 'black' }} /> : <Bars3Icon style={{ width: 24, height: 24, color: 'black' }} />}</div>
              <img src={Logo} className={s.logoImg} onClick={topLogo} alt="Ameen" />
            </div>
            <ul className={`${s.navMain} `} >
              <li className={s.mainLink} onClick={()=>scroll('appteacher')}>Ustozlar</li>
              <li className={s.mainLink} onClick={()=>scroll('apppartners')}>Partnerlar</li>
              <li className={s.mainLink} onClick={()=>scroll('appcourse')}>To'plamalar</li>
              <li className={s.mainLink} onClick={()=>scroll('appfreecourse')}>Bepul kurslar</li>
              <li className={s.mainLink} onClick={()=>scroll('appcomment')}>Fikrlar</li>
            </ul>
          </div>
          <div className={s.nav_right}>
            {/* <select name="language" id="">
                <option value="uz">UZ</option>
                <option value="">RU</option>
                <option value="">Eng</option>
            </select> */}
            <button className={s.btnReg} onClick={sendPage} type="submit">
              Ro'yxatdan o'tish
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className={`${s.burgernav} ${isOpen ? s.navMain2 : s.navMain1}`}>

      <ul className={s.navMain1}>
              <li className={s.mainLink2} onClick={()=>scroll('appteacher')}>Ustozlar</li>
              <li className={s.mainLink2} onClick={()=>scroll('apppartners')}>Partnerlar</li>
              <li className={s.mainLink2} onClick={()=>scroll('appcourse')}>To'plamalar</li>
              <li className={s.mainLink2} onClick={()=>scroll('appfreecourse')}>Bepul kurslar</li>
              <li className={s.mainLink2} onClick={()=>scroll('appcomment')}>Fikrlar</li>
            </ul>
      </div>
    </>
  );
}

export default Navbar;
