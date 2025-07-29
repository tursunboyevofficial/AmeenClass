import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import s from "./register.module.scss";
import { Logo } from "../../../utils/getImg";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.includes("_")) {
      setError("Iltimos, telefon raqamingizni to‘liq kiriting.");
    } else {
      setError("");
      console.log("Yuborilmoqda:", phone);
    }
  };
  const navigate = useNavigate();
  const sendPage = () => {
    navigate("/login");
  };
  return (
    <><div className={s.box}>
    <div className={s.navbar}>
    <div className={s.container}>
    <div className={s.nav}>
        <img src={Logo} alt="srch" className={s.ImgName} />
        <div className={s.right}></div>
        </div>
        </div>
    </div>
    <div className={s.registerContainer}>
      <div className={s.formBox}>
        <h2 className={s.title}>Ro‘yxatdan o‘tish</h2>
        <p className={s.desc}>
          Telefon raqamingizga bir martalik tasdiqlash kodini yuboramiz.
          Iltimos, uning to‘g‘riligiga ishonch hosil qiling
        </p>
        <form onSubmit={handleSubmit}>
          <label className={s.label}>Telefon raqam</label>
          <div className={s.phoneInputGroup}>
            <div className={s.number}>
              <PhoneInput
                onChange={setPhone}
                containerClass={s.phoneContainer}
                country={"uz"}
                value={phone}
              />
            </div>
          </div>
          {error && <div className={s.errorMessage}>{error}</div>}
          <button type="submit" className={s.submitBtn}>
            Ro‘yxatdan o‘tish
          </button>
        </form>
        <p className={s.loginLink}>
          Avvaldan akkauntingiz bormi? <a onClick={sendPage}>Kirish</a>
        </p>
      </div>
    </div>
    </div>
    </>
  );
}
