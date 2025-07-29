import s from "./hrCours.module.scss";

function AppTeacher() {
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
            <div className={s.card}>
              <p className={s.imgtext1}>
              <span className={s.imgtitle}>Kozimxon To‘rayev Kozimxon To‘rayev </span>👨‍🏫 O‘qituvchi Hammuallif
              Jahongir Imomnazarov Jahongir Imomnazarov 👨‍🏫 Islom Moliyasi
            </p>
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AppTeacher;
