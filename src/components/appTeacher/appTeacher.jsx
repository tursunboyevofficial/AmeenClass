import s from "./appTeacher.module.scss";
import { useNavigate } from "react-router-dom";
import { award } from "../../utils/getImg";

function AppTeacher() {
  const navigate = useNavigate();
  const handClick = () => {
    navigate("/hr");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className={`container ${s.contain}`}>
        <div className={s.box}>
          <div className={s.top}>
            <p className={s.ptext}>
              <span></span>USTOZLAR <span></span>
            </p>
            <h1 className={s.title}>Ustozlarimiz</h1>
            <p className={s.textp}>Eng kuchli soha vakillaridan o‘rganing</p>
          </div>
          <div className={s.bottom}>
            <div onClick={handClick} className={s.card}>
              <p className={s.imgtext1}>
                <span className={s.imgtitle}>
                  Kozimxon To‘rayev<img src={award} alt="Logo" />
                </span>
                O‘qituvchi Hammuallif 
              </p>
            </div>
            <div className={s.card1}>
              <div className={s.parda}></div>
              <div className={s.imgtext2}>
                <p className={s.ptextp2}><span className={s.imgtitle2}>Jahongir Imomnazarov<img src={award} alt="Logo" /> </span>
                <span className={s.title3}>Islom Moliyasi PARTNERS</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTeacher;
