import { use, useState } from "react";
import { Logo } from "../../utils/getImg";
import s from "./HrNavbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



function HrNavbar() {
  const [isOpen,  setIsOpen] = useState(true);
  const toggle = ()=>{
    console.log('log prev');
    setIsOpen(prev => !prev)
  }
  const navigate = useNavigate();
  const sendPage = () => {
    navigate('/login')
  }
  const topLogo = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const elementPosition = ((section.getBoundingClientRect().top + window.scrollY)-100)
      section.scrollIntoView({ 
        top:elementPosition,
        behavior: 'smooth'
       });
    }
  };
  return (
    <>
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.wrapperBox}>
          <div className={s.mainBox}>
            <div className={s.navLogo}>
              <div className={s.buttonmenu}><AiOutlineMenu onClick={() => toggle()} /></div>
              <img src={Logo} onClick={topLogo} className={s.logoImg} alt="Ameen" />
            </div>
            <ul className={`${s.navMain} `} >
              <li className={s.mainLink} onClick={()=>scroll('course')}>Kurs haqida qisqacha</li>
              <li className={s.mainLink} onClick={()=>scroll('freeday')}>Dastur</li>
              <li className={s.mainLink} onClick={()=>scroll('cours')}>Ustozlar</li>
              <li className={s.mainLink} onClick={()=>scroll('tarif')}>Tariflar</li>
              <li className={s.mainLink} onClick={()=>scroll('comment')}>Fikrlar</li>
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
              <li className={s.mainLink2} onClick={()=>scroll('course')}>Kurs haqida qisqacha</li>
              <li className={s.mainLink2} onClick={()=>scroll('freeday')}>Dastur</li>
              <li className={s.mainLink2} onClick={()=>scroll('cours')}>To'Ustozlar</li>
              <li className={s.mainLink2} onClick={()=>scroll('tarif')}>Tariflar</li>
              <li className={s.mainLink2} onClick={()=>scroll('comment')}>Fikrlar</li>
            </ul>
      </div>
    </>
  );
}

export default HrNavbar;
