import s from "./hrCourse.module.scss";
import { playIcon } from "../../utils/getImg";
import { useNavigate } from "react-router-dom";

function hrCourse() {
  const navigate = useNavigate();
  const sendPage = () => {
    navigate('/login')
  }
  return (
    <>
      <div className={s.box}>
        <div className="container">
          <div className={s.header}>
            <div className={s.left}>
              <p className={s.ptext}><span className={s.span_title}></span>HR KURSI</p>
              <h1 className={s.title}>Kompaniyada uchraydigan muammolarga HR beradigan yechimlar</h1>
              <p className={s.textp}>HR professional kurslarining barcha qismlarini bitta to‘plamda, ancha qulayroq narxda harid qiling va qo‘shimcha sovg‘alarga ega bo‘ling!</p>
              <button className={s.button1} onClick={sendPage}>Ro'yxatdan o'tish</button>
            </div>
            <div className={s.right}>
                <div className={s.img_box}>
                    <div className={s.top_img}>
                    <div className={s.img_section2}></div>
                    <div className={s.img_section1}></div>
                    </div>
                    <div className={s.bottom_img}>
                    <div className={s.img_section3}><span className={s.img_span}><img src={playIcon} alt="1234" className={s.Img_Icon} /></span></div>
                    <div className={s.img_section4}></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hrCourse;
