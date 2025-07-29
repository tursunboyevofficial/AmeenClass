import s from "./appCourse.module.scss";

function AppCourse() {
  return (
    <div>
      <div className={`container ${s.contain}`}>
        <div className={s.box}>
          <div className={s.btn}>
          </div>
          <div className={s.card}>
            <div className={s.left}>
              <p className={s.text}>
                <span className={s.texts}></span>To’plamlar
              </p>
              <h1 className={s.title}>Kurslar to’plamlari</h1>
              <p className={s.textp}>
                To’plamlar orqali bir yo’nalishdagi kursni to’liq va mukammal
                holatda o’rganing
              </p>
            </div>
            <div className={s.right}>
              <div className={s.card1}>
                <h1 className={s.cardimg1}>HR Kurs To’plam</h1>
              </div>
              <div className={s.card2}>
                <h1 className={s.cardimg2}>Islom Moliyasi kurs to’plam</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCourse;
